import { faker } from '@faker-js/faker/locale/ko';

const investmentData = [
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "차은우",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "AI 기술에 대한 신뢰를 가지고 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "변우석",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "코딩 교육의 미래가 밝다고 생각합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "송강",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "게임과 학습의 결합이 인상적입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김태리",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "디지털 헬스케어의 잠재력이 무궁무진합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이도현",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "핀테크 산업의 성장 가능성이 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "신민아",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 홈 기술이 미래를 선도할 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "유아인",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "블록체인 기술의 혁신에 주목하고 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박서준",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "자율주행차 기술의 발전에 기대가 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "전여빈",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "지속 가능한 에너지 솔루션이 필요합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "류준열",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "환경 보호 기술에 투자할 가치가 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김지원",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "가상현실(VR) 산업의 가능성이 무궁무진합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "정해인",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "헬스케어 기술이 전 세계에 기여할 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "서강준",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "로봇공학의 발전이 곧 다가올 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김수현",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "사물인터넷(IoT)이 생활을 바꿀 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박보검",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "인공지능(AI)이 우리의 삶에 큰 변화를 가져올 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김고은",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "혁신적인 교육 플랫폼이 필요합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "조인성",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "사이버 보안에 대한 투자가 필수적입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이성경",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "의료 기술의 발전이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박보영",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "디지털 마케팅의 가능성을 믿습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "공유",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "원격 근무 기술의 중요성이 커지고 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "한지민",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "데이터 분석의 힘을 믿습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이민호",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "전기차 산업이 앞으로의 트렌드입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "수지",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "패션과 기술의 결합에 기대가 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박형식",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "우주 탐사 기술이 매력적입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "송혜교",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "모바일 앱의 성장이 지속될 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "고아라",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "친환경 기술이 우리의 미래를 책임질 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이동욱",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "의료 산업의 혁신이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김태리",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "게임 산업의 발전이 무궁무진합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "임윤아",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "재생 가능 에너지에 투자할 가치가 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김연아",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스포츠 기술의 발전이 흥미롭습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김연아",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스포츠 기술의 발전이 흥미롭습니다.",
    password: "password123",
  },
  // 추가된 100개 데이터
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박민영",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "의료 데이터 분석 기술의 발전이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김우빈",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "클라우드 서비스의 확장이 흥미롭습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "유재석",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "미래의 헬스케어 솔루션에 큰 기대를 하고 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "강호동",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 팜 기술이 인상적입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이지은",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "빅데이터 분석의 가능성을 보고 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박보검",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "e커머스 산업의 성장 잠재력이 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "한효주",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "친환경 에너지 기술에 관심이 많습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "공유",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "차세대 모바일 기술이 흥미롭습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김태리",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "게임 개발의 미래가 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박신혜",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "AR/VR 기술의 발전 가능성이 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김고은",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "의료 기술 혁신에 관심이 많습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "수지",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "온라인 교육 플랫폼이 필요하다고 생각합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "정해인",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 시티 기술이 흥미롭습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박서준",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "핀테크 혁신에 기대가 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "전여빈",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "사이버 보안 기술의 중요성이 커지고 있습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "류준열",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "재생 에너지 솔루션에 관심이 많습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김지원",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "헬스케어 데이터 분석 기술이 필요합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박보영",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 워크 기술의 성장이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "고아라",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 헬스 기술이 인상적입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이동욱",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 농업 기술이 미래를 선도할 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "이성경",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "디지털 헬스케어 기술에 대한 기대가 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "유재석",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "자율주행 기술의 발전이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김수현",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "블록체인 기술이 미래를 바꿀 것입니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "차은우",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "AI 기술의 발전이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "강호동",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스마트 헬스케어 기술의 가능성이 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "김연아",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "스포츠 기술의 발전이 필요합니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "박보검",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "클라우드 기술의 혁신이 기대됩니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "수지",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "핀테크 기술의 잠재력이 큽니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "정해인",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "의료 혁신 기술에 투자하고 싶습니다.",
    password: "password123",
  },
  {
    companyId: faker.number.int({ min: 1, max: 30 }),
    investorName: "한효주",
    investmentAmount: faker.number.int({ min: 1, max: 99 }) * 10000000,
    investmentComment: "환경 기술의 발전이 필요합니다.",
    password: "password123",
  },
];

export default investmentData;
