"use client";

import React from "react";
import Image from "next/image";
import { types } from "@/constants/types";

const CompatibleTypes = ({ userCode, size = "small" }) => {
  const compatibleTypes = types.filter((type) =>
    type.compatibleWith.includes(userCode)
  );

  const imageSize = size === "small" ? 22 : 45;
  const textSize =
    size === "small"
      ? "text-xl bg-pink-100 px-2 w-full py-2 rounded-xl"
      : "text-xl";
  const containerPadding = size === "small" ? "p-2 gap-2 " : "py-2 px-8 gap-4";

  return (
    <div
      className={`w-full mt-4 text-black py-2 ${
        size === "small" ? "text-base" : "text-xl"
      }`}
    >
      <p
        className={`py-2 ${
          size === "small" ? "text-xl" : "text-xl"
        } font-bold text-start px-2`}
      >
        나와 잘 맞는 유형 💕
      </p>
      <div
        className={`grid ${
          size === "small" ? "grid-cols-2" : "grid-cols-2"
        } mt-2 items-center justify-center gap-2 w-full `}
      >
        {compatibleTypes.length > 0 ? (
          compatibleTypes.map((type) => (
            <div
              key={type.code}
              className={`flex ${
                size === "small" ? "flex-row" : "flex-col h-60"
              } items-center ${containerPadding} bg-white bg-opacity-40 rounded-lg cursor-pointer transition-all duration-300 ease-in-out w-full `}
            >
              {/* 이미지 조건부 렌더링: small일 때는 이미지 안 뜨게 */}
              {size !== "small" && (
                <Image
                  src={`${type.type.src}`}
                  alt={type.type.label}
                  width={imageSize}
                  height={imageSize}
                  className="rounded-sm pt-2"
                />
              )}
              <span
                className={`font-extrabold ${textSize} text-center whitespace-nowrap`}
              >
                {type.type.label}
              </span>
              {size === "large" && (
                <span className={` text-gray-700 text-base text-center mt-2`}>
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
