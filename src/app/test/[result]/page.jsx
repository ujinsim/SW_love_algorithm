"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { types } from "@/constants/types";
import { typeMap } from "@/constants/typeMap";
import CompatibleTypes from "@/components/CompatibleTypes";
import Button from "@/components/Button";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const result = useParams();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const selectedType = types.find((type) => type.code === result.result) || {
    type: { label: "알 수 없는 유형", src: "", width: "50px" },
    description: "이 유형에 대한 설명이 없습니다.",
    shortDescription: "",
  };

  const selectedTypeMap = typeMap[result.result] || {
    borderColor: "border-gray-200",
    gradient: "bg-gray-500",
    textColor: "text-gray-500",
  };

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div
      className={`flex-col min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-purple-300 to-purple-200 `}
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
          <h1
            className={`text-3xl font-bold text-black text-center mb-10 pt-10`}
          >
            👇 나의 연애 유형은 ?! 👇
          </h1>

          <Image
            src={`${selectedType.type.src}`}
            alt={selectedType.type.label}
            width={400}
            height={selectedType.type.height || 50}
            className="mb-6 rounded-xl border-2 border-black p-2"
          />

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

          <p className="p-5 pt-20 w-full flex flex-col text-center text-lg text-gray-800">
            나와 잘 맞는 유형을 뽑고 싶다면?
            <br />
            카드를 만들어 보세요!
          </p>

          <Button
            text={"홈 화면으로 이동"}
            onClick={() => handleNavigate("/")}
            className={`w-full py-2 mt-3 rounded-lg text-white shadow-lg hover:opacity-80 transition-opacity`}
          />
        </div>
      )}
    </div>
  );
}
