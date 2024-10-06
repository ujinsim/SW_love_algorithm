import React from "react";
import { types } from "@/constants/types";
import { typeMap } from "@/constants/typeMap";

export default function TypeCarousel() {
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex animate-slide">
        {types.map((item, index) => {
          const typeCode = item.code;
          const { borderColor, gradient } = typeMap[typeCode] || {};

          return (
            <button
              key={index}
              className={`flex items-center justify-center border-pink-200 rounded-3xl pl-2 pr-2 text-center h-12 w-auto min-w-[100px] ${gradient} gap-2 bg-opacity-10`}
            >
              <div className="text-white text-base whitespace-nowrap text-center">
                {item.type.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
