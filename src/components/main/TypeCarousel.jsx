import React from "react";

export default function TypeCarousel() {
  const types = [
    {
      src: "images/logos/Python-logo.svg",
      label: "Python 유형",
      width: "50px",
    },
    {
      src: "images/logos/JS-logo.svg",
      label: "JavaScript 유형",
      width: "50px",
    },
    { src: "images/logos/Java-logo.png", label: "Java 유형", width: "40px" },
    { src: "images/logos/MySql-logo.svg", label: "MySQL 유형", width: "50px" },
    {
      src: "images/logos/Assembly-logo.svg",
      label: "Assembly 유형",
      width: "50px",
    },
    { src: "images/logos/C++-logo.svg", label: "C++ 유형", width: "50px" },
    { src: "images/logos/Ruby-logo.svg", label: "Ruby 유형", width: "50px" },
    { src: "images/logos/Go-logo.svg", label: "Go 유형", width: "50px" },
  ];

  return (
    <div className="w-full overflow-hidden pt-6">
      <div className="flex animate-slide">
        {types.map((item, index) => (
          <button
            key={index}
            className="flex items-center justify-center border-2 rounded-xl pl-1 pr-2 text-center h-12 w-auto min-w-[120px] border-purple-200 gap-2 hover:bg-purple-50"
          >
            <img src={item.src} width={item.width} className="px-2" />
            <div className="text-stone-500 text-sm font-sans whitespace-nowrap text-center">
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
