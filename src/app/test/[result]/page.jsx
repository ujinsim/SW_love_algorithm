"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { types } from "@/constants/types";
import { typeMap } from "@/constants/typeMap";
import CompatibleTypes from "@/components/CompatibleTypes";
import Button from "@/components/Button";
import Loader from "@/components/Loader";

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
      className={`flex-col min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-pink-300 to-pink-200`}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader /> {/* Use the heart loader during loading */}
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

          <div className="bg-blue-100 p-6 text-center rounded-lg shadow-md my-10">
            <h1 className="text-3xl font-bold text-black">
              instagram 공유 이벤트
            </h1>
            <p className="text-sm text-gray-600 my-2"></p>

            <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <div className="text-left">
                <div className="flex items-start text-black">
                  <div className="text-left">
                    <p className="font-bold text-3xl">if (</p>
                    <p className="text-lg font-semibold">
                      1. 자신의 유형결과 캡쳐
                    </p>
                    <p className="text-lg font-semibold">
                      2. 공개계정으로{" "}
                      <span className="text-blue-600">@mju_sw</span> 태그 후
                      스토리 업로드
                    </p>
                    <p className="text-lg font-semibold">
                      3. 팔로우 및 참여완료! DM전송
                    </p>
                    <p className="font-bold text-3xl">) ⭐️ ⭐️ ⭐️</p>
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex items-center">
                    <div className="bg-yellow-400 rounded-full px-3 py-1 flex items-center">
                      <span className="text-lg font-bold text-black whitespace-nowrap">
                        💬 kakao Pay
                      </span>
                    </div>
                    <span className="ml-4 text-xl font-bold text-gray-800">
                      30,000원
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-lg text-gray-700">
                  *다섯 분께 증정합니다
                </p>
                <p className="mt-2 text-base text-gray-400">
                  *본 이벤트는 축제기간 한정 진행됩니다
                </p>
              </div>
            </div>
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
