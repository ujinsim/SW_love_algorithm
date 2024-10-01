"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { types } from "@/constants/types";
import { typeMap } from "@/constants/typeMap";
import CompatibleTypes from "@/components/CompatibleTypes";
import Button from "@/components/Button";

export default function Page() {
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const result = useParams();
  const router = useRouter();

  // 로딩 상태를 시뮬레이션하기 위해 useEffect 사용
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // 2초 후 로딩 완료 상태로 변경
    }, 2000);
  }, []);

  const selectedType = types.find((type) => type.code === result.result) || {
    type: { label: "알 수 없는 유형", src: "", width: "50px" },
    description: "이 유형에 대한 설명이 없습니다.",
    shortDescription: "",
  };

  const selectedTypeMap = typeMap[result.result] || {
    borderColor: "border-gray-200",
    gradient: "bg-gray-500", // 기본 배경 설정
    textColor: "text-gray-500",
  };

  const handleNavigate = (path) => {
    router.push(path);
  };

  // 줄바꿈과 줄마다 👉 추가 처리하는 함수
  const formatDescriptionWithEmoji = (description) => {
    return description.split("<br/>").map((line, index) => (
      <span key={index}>
        👉 {line}
        <br />
      </span>
    ));
  };

  return (
    <div
      className={`flex-col min-h-screen w-full flex items-center justify-center ${selectedTypeMap.gradient}`}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="animate-spin w-12 h-12 border-4 border-t-pink-500 border-pink-200 rounded-full"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className={`py-5 w-full max-w-[400px] flex flex-col items-center bg-opacity-70 bg-white p-5 shadow-lg ${selectedTypeMap.borderColor}`}
        >
          {selectedType.shortDescription && (
            <p className="text-lg text-gray-600 text-center mb-2">
              {selectedType.shortDescription}
            </p>
          )}

          <h1
            className={`text-4xl font-bold ${selectedTypeMap.textColor} text-center mb-4`}
          >
            {selectedType.type.label}
          </h1>

          <Image
            src={`${selectedType.type.src}`}
            alt={selectedType.type.label}
            width={200}
            height={selectedType.type.height || 50}
            className="mb-6"
          />

          <p
            className={`text-lg text-gray-700 mb-6 text-left leading-relaxed bg-white p-6 rounded-xl shadow-inner`}
          >
            {formatDescriptionWithEmoji(selectedType.description)}
          </p>

          <p
            className={`text-xl mb-2 pt-2 text-start w-full ${selectedTypeMap.textColor}`}
          >
            {selectedType.type.label.slice(0, -2)}(이)란?
          </p>

          <div className="text-gray-600 pb-3 mb-6 text-left bg-white p-4 rounded-lg shadow-sm">
            {selectedType.codeDescription}
          </div>

          <div className="text-center w-full flex items-center">
            <CompatibleTypes userCode={selectedType.code} size="large" />
          </div>

          <p className="py-5 w-full flex flex-col text-center text-lg text-gray-800">
            나와 잘 맞는 유형을 뽑고 싶다면?
            <br />
            카드를 만들어 보세요!
          </p>

          <Button
            text={"홈 화면으로 이동"}
            onClick={() => handleNavigate("/")}
            className={`w-full py-2 mt-3 rounded-lg ${selectedTypeMap.gradient} text-white shadow-lg hover:opacity-80 transition-opacity`}
          />
        </div>
      )}
    </div>
  );
}
