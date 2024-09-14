export const types = [
  {
    type: {
      src: "images/logos/Python-logo.svg",
      label: "Python 유형",
      width: "50px",
    },
    code: "AAA",
    description:
      "당신은 단순하지만 깊이가 있는 성격으로, 다양한 상황에 유연하게 적응하는 능력을 갖추고 있습니다! 🌟🙌 일상의 작은 문제에서도 오해가 생기면 지체 없이 풀고 싶어 하는 스타일이라, 문제를 질질 끌기보다는 바로 해결하고, 상황이 더 꼬이기 전에 적극적으로 나서서 처리하는 게 특기죠!",
    codeDescription:
      "Python은 범용 프로그래밍 언어로, 웹 개발, 데이터 분석, 인공지능, 자동화 등 다양한 분야에서 사용됩니다. 간결한 문법과 풍부한 라이브러리로 유명합니다.",
    compatibleWith: ["ABA", "AAB", "BAB"], // Java, MySQL, C++
  },
  {
    type: {
      src: "images/logos/JS-logo.svg",
      label: "JavaScript 유형",
      width: "50px",
    },
    code: "ABB",
    description:
      "당신은 창의적이고 아이디어가 넘치는 성격을 지니며, 새로운 것을 시도하고 배우는 데 빠릅니다! 종종 다양한 아이디어와 프로젝트에 관심을 가지며, 그 과정에서 산만해질 수 있습니다. 창의성은 독특하고 혁신적인 방식으로 문제를 해결하는 데 도움을 줍니다.",
    codeDescription:
      "JavaScript는 웹 개발의 핵심 언어로, 프론트엔드와 백엔드 개발 모두에 사용됩니다. 비동기 처리와 동적 웹 페이지 생성에 강점을 가지고 있습니다.",
    compatibleWith: ["AAB", "BAB", "BBB"], // MySQL, C++, Go
  },
  {
    type: {
      src: "images/logos/Java-logo.png",
      label: "Java 유형",
      width: "40px",
    },
    code: "ABA",
    description:
      "당신은 규칙과 체계를 중시하는 진정한 '규칙 매니아'입니다! 복잡한 상황도 체계적으로 정리하며, 즉각적인 해결보다는 천천히, 차분히 문제를 분석합니다.",
    codeDescription:
      "Java는 플랫폼 독립적인 객체 지향 언어로, 대규모 기업 시스템, 안드로이드 앱 개발 등에서 널리 사용됩니다. 강력한 타입 시스템과 메모리 관리를 제공합니다.",
    compatibleWith: ["AAA", "BAA"], // Python, Assembly
  },
  {
    type: {
      src: "images/logos/MySql-logo.svg",
      label: "MySQL 유형",
      width: "50px",
    },
    code: "AAB",
    description:
      "당신은 신뢰할 수 있는 파트너로, 약속을 지키고 헌신적입니다. 하지만 가끔은 낯선 상황에 회피하려는 경향도 있습니다. 변화에 적응하기보다는 익숙한 것에 안주하는 스타일입니다.",
    codeDescription:
      "MySQL은 인기 있는 오픈 소스 관계형 데이터베이스 관리 시스템(RDBMS)으로, 데이터 저장과 검색, 웹 애플리케이션의 데이터베이스 작업에 사용됩니다.",
    compatibleWith: ["ABA", "ABB", "BBA"], // Java, JavaScript, Ruby
  },
  {
    type: {
      src: "images/logos/Assembly-logo.svg",
      label: "Assembly 유형",
      width: "50px",
    },
    code: "BAA",
    description:
      "당신은 정확성과 세부 사항에 있어 완전히 마스터 클래스! 문제 해결에 있어서는 감정보다 논리와 실용성을 중시하는 냉철한 해결사입니다.",
    codeDescription:
      "Assembly 언어는 저수준 프로그래밍 언어로, 하드웨어와 가까운 수준에서 직접적인 제어가 필요할 때 사용됩니다. 성능 최적화와 시스템 프로그래밍에 적합합니다.",
    compatibleWith: ["ABA", "BAB"], // Java, C++
  },
  {
    type: {
      src: "images/logos/C++-logo.svg",
      label: "C++ 유형",
      width: "50px",
    },
    code: "BAB",
    description:
      "당신은 다재다능하며, 복잡한 문제를 처리하는 데 있어서는 전문가입니다. 예기치 못한 상황에서도 탁월한 해결 능력을 발휘합니다.",
    codeDescription:
      "C++는 객체 지향과 절차적 프로그래밍을 지원하는 언어로, 시스템 소프트웨어, 게임 개발, 성능이 중요한 애플리케이션에 사용됩니다. 높은 성능과 효율성을 제공합니다.",
    compatibleWith: ["AAA", "ABB", "BAA"], // Python, JavaScript, Assembly
  },
  {
    type: {
      src: "images/logos/Ruby-logo.svg",
      label: "Ruby 유형",
      width: "50px",
    },
    code: "BBA",
    description:
      "당신은 창의적이고 직관적인 성격으로, 감정적이면서도 신중한 접근을 선호합니다. 때로는 다소 내향적이고 회피하는 경향을 보이지만, 신중하고 세심하게 문제를 해결합니다.",
    codeDescription:
      "Ruby는 동적 타이핑과 객체 지향 프로그래밍을 지원하는 언어로, 웹 애플리케이션 개발에 적합합니다. Rails 프레임워크와 함께 많이 사용됩니다.",
    compatibleWith: ["AAB", "ABA", "BBB"], // MySQL, Java, Go
  },
  {
    type: {
      src: "images/logos/Go-logo.svg",
      label: "Go 유형",
      width: "50px",
    },
    code: "BBB",
    description:
      "당신은 실용성과 효율을 사랑하는 성격으로, 문제를 빠르게 처리하고 감정보다 실용적인 접근을 중시합니다.",
    codeDescription:
      "Go는 구글에서 개발한 프로그래밍 언어로, 간결하고 효율적인 문법을 제공하며, 서버 사이드 애플리케이션과 클라우드 서비스 개발에 적합합니다.",
    compatibleWith: ["ABB", "BAB", "BBA"], // JavaScript, C++, Ruby
  },
];
