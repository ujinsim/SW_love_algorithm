"use client";
import React from "react";
import { useParams } from "next/navigation";
import { types } from "@/constants/types";

export default function Page() {
  const result = useParams();

  const selectedType = types.find((type) => type.code === result.result) || {
    type: { label: "알 수 없는 유형", src: "", width: "50px" },
    description: "이 유형에 대한 설명이 없습니다.",
  };

  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center bg-white rounded-3xl p-5">
        <img
          src={`../${selectedType.type.src}`}
          alt={selectedType.type.label}
          style={{ width: selectedType.type.width }}
          className="mb-4"
        />

        <h1 className="text-3xl font-bold mb-4">{selectedType.type.label}</h1>

        <p className="text-xl text-gray-700 mb-4 text-center">
          {selectedType.description}
        </p>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            이 유형은 나와 잘 맞아요 !!
          </h2>
          <ul className="text-gray-600 flex gap-2 justify-center">
            {selectedType.compatibleWith.map((compatibleCode) => {
              const compatibleType = types.find(
                (type) => type.code === compatibleCode
              );
              return (
                <li key={compatibleCode} className="mb-1">
                  {compatibleType?.type.label || "알 수 없는 유형"}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
