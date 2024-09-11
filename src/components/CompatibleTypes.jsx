"use client";
import React from "react";
import { types } from "@/constants/types";

const CompatibleTypes = ({ userCode }) => {
  // 사용자 유형에 맞는 호환되는 유형을 필터링
  const compatibleTypes = types.filter((type) =>
    type.compatibleWith.includes(userCode)
  );

  return (
    <div className="w-full mt-4 px-5 font-normal text-neutral-600 py-2 shadow-lg">
      <p>이 유형은 나와 잘 맞아요 👏</p>
      <div className="flex flex-wrap gap-4 mt-2">
        {compatibleTypes.length > 0 ? (
          compatibleTypes.map((type) => (
            <div
              key={type.code}
              className="flex items-center gap-1 p-2 rounded-lg"
            >
              <img
                src={`/${type.type.src}`}
                alt={type.type.label}
                width={type.type.width}
                className="h-4 w-4"
              />
              <span className="text-xs font-sans">{type.type.label}</span>
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
