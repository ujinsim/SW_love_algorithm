"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation"; // useRouter 추가
import { types } from "@/constants/types";
import CompatibleTypes from "@/components/CompatibleTypes";
import Button from "@/components/Button";

export default function Page() {
  const result = useParams();
  const router = useRouter(); // useRouter 훅을 사용하여 네비게이션 기능 구현

  const selectedType = types.find((type) => type.code === result.result) || {
    type: { label: "알 수 없는 유형", src: "", width: "50px" },
    description: "이 유형에 대한 설명이 없습니다.",
  };

  // 홈 화면으로 이동하는 함수
  const handleNavigate = (path) => {
    router.push(path); // 경로를 설정하여 해당 경로로 이동
  };

  return (
    <div className="flex-col bg-gradient-to-b from-white via-purple-300 to-pink-400 min-h-screen w-full flex items-center justify-center">
      <div className="my-5 w-full max-w-[500px] flex flex-col items-center bg-white p-5">
        <img
          src={`../${selectedType.type.src}`}
          alt={selectedType.type.label}
          style={{ width: selectedType.type.width }}
          className="mb-4"
        />

        <h1 className="text-5xl font-bold mb-10 text-black">
          {selectedType.type.label}
        </h1>
        <p className="text-black">
          {selectedType.type.label.slice(0, -2)}언어란 ?
        </p>
        <p className="text-black p-3">{selectedType.codeDescription}</p>

        <p className="text-xl text-gray-700 mb-4 text-center">
          {selectedType.description}
        </p>

        <div className="text-center w-full flex items-center">
          <CompatibleTypes userCode={selectedType.code} size="large" />
        </div>
        <Button text={"모든 유형 보러가기"} />
      </div>

      <p className="py-3 ">
        나와 잘 맞는 유형을 뽑고싶다면? 카드를 만들어 보세요!
      </p>

      <Button text={"홈 화면으로 이동"} onClick={() => handleNavigate("/")} />
    </div>
  );
}
