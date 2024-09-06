export const types = [
  {
    type: {
      src: "images/logos/Python-logo.svg",
      label: "Python 유형",
      width: "50px",
    },
    code: "AAA",
    compatibleWith: ["ABA", "AAB", "BAB"], // Java, MySQL, C++
  },
  {
    type: {
      src: "images/logos/JS-logo.svg",
      label: "JavaScript 유형",
      width: "50px",
    },
    code: "ABB",
    compatibleWith: ["AAB", "BAB", "BBB"], // MySQL, C++, Go
  },
  {
    type: {
      src: "images/logos/Java-logo.png",
      label: "Java 유형",
      width: "40px",
    },
    code: "ABA",
    compatibleWith: ["AAA", "BAA"], // Python, Assembly
  },
  {
    type: {
      src: "images/logos/MySql-logo.svg",
      label: "MySQL 유형",
      width: "50px",
    },
    code: "AAB",
    compatibleWith: ["ABA", "ABB", "BBA"], // Java, JavaScript, Ruby
  },
  {
    type: {
      src: "images/logos/Assembly-logo.svg",
      label: "Assembly 유형",
      width: "50px",
    },
    code: "BAA",
    compatibleWith: ["ABA", "BAB"], // Java, C++
  },
  {
    type: {
      src: "images/logos/C++-logo.svg",
      label: "C++ 유형",
      width: "50px",
    },
    code: "BAB",
    compatibleWith: ["AAA", "ABB", "BAA"], // Python, JavaScript, Assembly
  },
  {
    type: {
      src: "images/logos/Ruby-logo.svg",
      label: "Ruby 유형",
      width: "50px",
    },
    code: "BBA",
    compatibleWith: ["AAB", "ABA", "BBB"], // MySQL, Java, Go
  },
  {
    type: {
      src: "images/logos/Go-logo.svg",
      label: "Go 유형",
      width: "50px",
    },
    code: "BBB",
    compatibleWith: ["ABB", "BAB", "BBA"], // JavaScript, C++, Ruby
  },
];
