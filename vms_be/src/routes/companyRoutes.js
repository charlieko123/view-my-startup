import express from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middlewares/asyncHandler.js";

const prisma = new PrismaClient();
const router = express.Router();

// 기업 리스트 조회 API
router.get("/", async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    sort_by = "name",
    order = "asc",
  } = req.query;

  try {
    // 검색 기능: 이름 또는 카테고리를 기준으로 검색
    const filter = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { category: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    // 정렬 기능: 기본값은 이름 오름차순
    const orderBy = {};
    orderBy[sort_by] = order;

    // 페이지네이션 및 검색, 정렬 적용된 기업 리스트 조회
    const companies = await prisma.company.findMany({
      where: filter,
      orderBy: orderBy,
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit),
    });

    // 전체 기업 수 조회 (페이지네이션을 위한 전체 항목 수)
    const total = await prisma.company.count({ where: filter });

    // 응답 데이터
    res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      total: total,
      companies: companies,
    });
  } catch (error) {
    // 서버 오류 발생 시
    res
      .status(500)
      .json({ error: "기업 리스트를 가져오는 중 오류가 발생했습니다." });
  }
});

// 기업 상세 조회 API
router.get("/:companyId", async (req, res) => {
  const { companyId } = req.params;

  try {
    const company = await prisma.company.findUnique({
      where: { id: parseInt(companyId) }, // companyId를 정수로 변환하여 조회
      include: {
        investments: true, // Investment 모델의 가상 투자정보 포함!
      },
    });

    // 해당 ID의 회사가 데이터베이스에 존재하지 않는 경우
    if (!company) {
      return res
        .status(404)
        .json({ error: "찾으시는 기업이 존재하지 않습니다." });
    }

    // 투자 정보를 포함한 회사 정보 응답 형식
    res.json({
      id: company.id,
      name: company.name,
      logoUrl: company.logoUrl,
      description: company.description,
      category: company.category,
      totalInvestment: company.totalInvestment,
      revenue: company.revenue,
      employees: company.employees,
      investments: company.investments,
    });
  } catch (error) {
    // 서버 오류 발생시
    res
      .status(500)
      .json({ error: "기업 상세 정보를 가져오는 중 오류가 발생했습니다." });
  }
});

// 기업 비교 API
router.post(
  "/compare",
  asyncHandler(async (req, res) => {
    try {
      const {
        companyIds,
        myCompanyId, // 내 기업의 ID 추가
        sortBy,
        order = "desc",
        includeRank = false,
        checkMyCompanyRanking, // 내 기업의 순위를 확인할지 여부
      } = req.body;

      if (
        !Array.isArray(companyIds) ||
        companyIds.length === 0 ||
        companyIds.length > 6
      ) {
        return res
          .status(400)
          .json({ error: "기업 ID는 1개이상 6개이하 제공되어야 합니다." });
      }

      if (checkMyCompanyRanking && !companyIds.includes(myCompanyId)) {
        return res.status(400).json({
          error: "내 기업 ID는 제공된 기업 ID 목록에 포함되어야 합니다.",
        });
      }

      const companies = await prisma.company.findMany({
        where: { id: { in: companyIds.map((id) => parseInt(id)) } },
        select: {
          id: true,
          name: true,
          logoUrl: true,
          description: true,
          category: true,
          totalInvestment: true,
          revenue: true,
          employees: true,
        },
      });

      if (companies.length === 0) {
        return res
          .status(404)
          .json({ error: "해당하는 기업이 존재하지 않습니다." });
      }

      let sortedCompanies;
      switch (sortBy) {
        case "totalInvestment":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc"
              ? a.totalInvestment - b.totalInvestment
              : b.totalInvestment - a.totalInvestment
          );
          break;
        case "revenue":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc" ? a.revenue - b.revenue : b.revenue - a.revenue
          );
          break;
        case "employees":
          sortedCompanies = companies.sort((a, b) =>
            order === "asc"
              ? a.employees - b.employees
              : b.employees - a.employees
          );
          break;
        default:
          return res.status(400).json({
            error: "정렬 기준이 유효하지 않습니다.",
          });
      }

      // 내 기업의 순위와 근접한 위 2개, 아래 2개 기업의 기업명, 기업 소개, 카테고리, 누적 투자 금액, 매출액, 고용 인원이 조회됩니다.
      // 다만 내 기업의 순위가 중간 순위가 아닐(ex. 2위) 경우 내 기업 포함해서 5개의 기업이 조회됩니다.

      // 내 기업의 순위를 확인해야 하는 특수한 상황 => 나의 기업 비교 페이지 => 기업 순위 확인하기 섹션에서 쓰임

      let response;

      if (checkMyCompanyRanking) {
        const myCompanyIndex = sortedCompanies.findIndex(
          (company) => company.id === myCompanyId
        );

        // 근접한 기업 인덱스 추출
        const start = Math.max(0, myCompanyIndex - 2);
        const end = Math.min(sortedCompanies.length, myCompanyIndex + 3);
        const nearbyCompanies = sortedCompanies.slice(start, end);

        if (includeRank) {
          // 순위를 포함하는 경우: 인접한 기업들의 순위를 계산하여 포함시킴
          response = nearbyCompanies.map((company, index) => ({
            ...company,
            rank: sortedCompanies.findIndex((c) => c.id === company.id) + 1,
          }));
        } else {
          // 순위를 포함하지 않는 경우: 내 기업의 순위와 근접한 기업들의 정보를 반환하되, 순위 정보를 포함 X
          response = nearbyCompanies;
        }

        // 여기서부터는 내 기업의 순위를 확인 X => 기업 순위 확인하기 섹션이 아닌 원래 일반적인 상황
      } else {
        if (includeRank) {
          // 순위를 포함하는 경우: 선택된 모든 기업들의 순위를 계산하여 포함시킴
          response = sortedCompanies.map((company, index) => ({
            ...company,
            rank: index + 1,
          }));
        } else {
          // 순위를 포함하지 않는 경우: 선택된 모든 기업들의 정보만 반환,
          response = sortedCompanies;
        }
      }

      res.json({ companies: response });
    } catch (error) {
      res
        .status(500)
        .json({ error: "기업 비교 정보를 가져오는 중 오류가 발생했습니다." });
    }
  })
);

export default router;
