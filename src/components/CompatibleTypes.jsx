"use client";

import React from "react";
import { types } from "@/constants/types";

const CompatibleTypes = ({ userCode, size = "large" }) => {
  const compatibleTypes = types.filter((type) =>
    type.compatibleWith.includes(userCode)
  );

  const imageSize = size === "small" ? "h-6 w-6" : "h-10 w-10";
  const textSize = size === "small" ? "text-sm" : "text-2xl";
  const containerPadding = size === "small" ? "p-2 gap-2" : "p-3 gap-4";

  return (
    <div
      className={`w-full mt-4 px-5 font-normal text-neutral-600 py-2 ${
        size === "small" ? "text-base" : "text-xl"
      }`}
    >
      <p className={`py-2 ${size === "small" ? "text-2xl" : "text-4xl"}`}>
        이 유형은 나와 잘 맞아요 👏
      </p>
      <div className="flex flex-wrap gap-8 mt-2 justify-center">
        {compatibleTypes.length > 0 ? (
          compatibleTypes.map((type) => (
            <div
              key={type.code}
              className={`flex items-center ${containerPadding} rounded-lg border-2 cursor-pointer hover:bg-gray-100`}
            >
              <img
                src={`/${type.type.src}`}
                alt={type.type.label}
                className={imageSize}
              />
              <span className={`font-sans ${textSize}`}>{type.type.label}</span>
              {size === "large" && type.codeDescription && (
                <span className={`font-sans ${textSize}`}>
                  {type.codeDescription}
                </span>
              )}
            </div>
          ))
        ) : (
          <p>호환되는 유형이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default CompatibleTypes;
