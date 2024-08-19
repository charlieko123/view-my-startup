import React, { useState, useMemo, useCallback } from "react";
import style from "./ModalSelectComparision.module.css";
import mockupData from "assets/mock/mockData";
import Pagination from "components/common/Pagination";
import SearchBar from "components/common/SearchBar";
import logo from "assets/images/company_logo_1.svg";
import SelectBtn from "./common/SelectBtn";
import deleteIcon from "assets/images/ic_delete.svg"; // 이미지 파일 import

const ModalSelectComparision = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [selectedCompanies, setSelectedCompanies] = useState([]); // 선택된 기업 목록
  const [error, setError] = useState(""); // 에러 메시지 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 5; // 페이지당 항목 수

  // 검색어에 따라 필터링된 기업 목록 생성
  const filteredCompanies = useMemo(() => {
    return mockupData.filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // 전체 페이지 수 계산
  const totalPages = useMemo(
    () => Math.ceil(filteredCompanies.length / itemsPerPage),
    [filteredCompanies.length, itemsPerPage]
  );

  // 검색어 변경 핸들러
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  // 기업 선택 핸들러
  const handleSelect = useCallback(
    (companyName) => {
      const company = mockupData.find((c) => c.name === companyName);

      // 선택된 기업이 최대 5개를 초과할 경우 에러 메시지 설정
      if (selectedCompanies.length >= 5) {
        setError("*비교할 기업은 최대 5개까지 선택 가능합니다.");
        return;
      }

      // 기업이 선택된 목록에 없으면 추가
      if (
        !selectedCompanies.some((selected) => selected.name === companyName)
      ) {
        setSelectedCompanies((prev) => [...prev, company]);
        setError("");
      }
    },
    [selectedCompanies]
  );

  // 기업 선택 해제 핸들러
  const handleDeselect = useCallback((companyName) => {
    setSelectedCompanies((prev) =>
      prev.filter((company) => company.name !== companyName)
    );
    setError("");
  }, []);

  // 페이지 변경 핸들러
  const handlePageChange = useCallback(
    (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  // 현재 페이지의 기업 목록
  const currentCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredCompanies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCompanies, currentPage, itemsPerPage]);

  // 모달 닫기 핸들러 (선택된 기업 목록을 부모 컴포넌트로 전달)
  const handleClose = () => {
    onClose(selectedCompanies);
  };

  if (!isOpen) return null; // 모달이 열리지 않은 경우 null 반환

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div className={style.modalContent}>
          <div className={style.modalHeadText}>
            비교할 기업 선택하기
            <img
              src={deleteIcon}
              className={style.deleteLogo}
              alt="deleteLogo"
              onClick={handleClose} // 모달 닫기 버튼 클릭 시 핸들러 호출
            />
          </div>

          <SearchBar
            value={searchTerm}
            onChange={handleSearchChange}
            onClear={() => setSearchTerm("")}
          />

          {selectedCompanies.length > 0 && (
            <div className={style.PartitionHug}>
              <h2 className={style.CompaniesColumnText}>
                선택한 기업 ({selectedCompanies.length})
              </h2>
              <ul className={style.companyColumnsHug}>
                {selectedCompanies.map((company) => (
                  <li key={company.name} className={style.companyColumns}>
                    <div className={style.companyColumnsLogoTextHug}>
                      <img
                        src={logo}
                        alt={`${company.name} logo`}
                        className={style.companyLogo}
                      />
                      <div className={style.companyColumnsNameCategoryHug}>
                        <div className={style.companyColumnsName}>
                          {company.name}
                        </div>
                        <div className={style.companyColumnsCategory}>
                          {company.category}
                        </div>
                      </div>
                    </div>

                    <SelectBtn
                      onClick={() => handleDeselect(company.name)}
                      text="선택 해제"
                      status="deselected"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {searchTerm && (
            <div className={style.PartitionHug}>
              <h2 className={style.CompaniesColumnText}>
                검색 결과 ({filteredCompanies.length})
              </h2>
              {filteredCompanies.length === 0 ? (
                <div className={style.noResultsMessage}>
                  검색결과가 없습니다
                </div>
              ) : (
                <>
                  <ul className={style.companyColumnsHug}>
                    {currentCompanies.map((company) => (
                      <li key={company.name} className={style.companyColumns}>
                        <div className={style.companyColumnsLogoTextHug}>
                          <img
                            src={logo}
                            alt={`${company.name} logo`}
                            className={style.companyLogo}
                          />
                          <div className={style.companyColumnsNameCategoryHug}>
                            <div className={style.companyColumnsName}>
                              {company.name}
                            </div>
                            <div className={style.companyColumnsCategory}>
                              {company.category}
                            </div>
                          </div>
                        </div>

                        {selectedCompanies.some(
                          (selected) => selected.name === company.name
                        ) ? (
                          <SelectBtn
                            onClick={() => handleDeselect(company.name)}
                            text="선택완료"
                            status="selected"
                          />
                        ) : (
                          <SelectBtn
                            onClick={() => handleSelect(company.name)}
                            text="선택하기"
                            status="default"
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                  {error && <div className={style.errorMessage}>{error}</div>}
                </>
              )}
            </div>
          )}

          {searchTerm && filteredCompanies.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              hasNext={currentPage < totalPages}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalSelectComparision;
