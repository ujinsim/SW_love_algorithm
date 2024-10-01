"use client";

import React from "react";
import Image from "next/image";
import { types } from "@/constants/types";

const CompatibleTypes = ({ userCode, size = "small" }) => {
  const compatibleTypes = types.filter((type) =>
    type.compatibleWith.includes(userCode)
  );

  const imageSize = size === "small" ? 22 : 40; // large일 때 이미지 크기를 40으로 설정
  const textSize = size === "small" ? "text-xs" : "text-xl"; // large일 때 텍스트 크기를 2xl로 설정
  const descriptionSize = size === "large" ? "text-base" : "text-base"; // large일 때 설명 크기 설정
  const containerPadding = size === "small" ? "p-2 gap-2" : "p-6 gap-6"; // large일 때 더 넓은 padding과 gap 설정

  return (
    <div
      className={`w-full mt-4 font-sans text-black py-2 ${
        size === "small" ? "text-base" : "text-xl"
      }`}
    >
      <p
        className={`py-2 ${
          size === "small" ? "text-xl" : "text-3xl"
        } font-bold text-center`}
      >
        이 유형은 나와 잘 맞아요 👏
      </p>
      <div
        className={`grid ${
          size === "small" ? "grid-cols-2" : "grid-cols-2"
        } mt-2 items-center justify-center gap-4 w-full `}
      >
        {compatibleTypes.length > 0 ? (
          compatibleTypes.map((type) => (
            <div
              key={type.code}
              className={`flex ${
                size === "small" ? "flex-row" : "flex-col h-60"
              } items-center ${containerPadding} bg-white bg-opacity-40 rounded-lg cursor-pointer transition-all duration-300 ease-in-out w-full`}
            >
              <Image
                src={`${type.type.src}`} // 이미지 경로가 올바른지 확인
                alt={type.type.label}
                width={imageSize} // 이미지 크기 조정
                height={imageSize} // 이미지 크기 조정
              />
              <span
                className={`font-extrabold ${textSize} text-center mb-2 whitespace-nowrap`}
              >
                {type.type.label}
              </span>
              {size === "large" && type.shortDescription && (
                <span
                  className={`font-sans ${descriptionSize} text-gray-700 text-center mt-2`}
                >
                  {type.shortDescription}
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
