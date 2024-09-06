import React from "react";
import HorizontalLine from "../HorizontalLine";

export default function AdModal({
  value,
  valueColor = "text-green-800",
  onClose,
  img,
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white shadow-lg p-6 rounded-xl max-w-[400px] text-center">
        <div className="text-4xl font-bold text-pink-600 mb-5">축하합니다!</div>
        <img
          src={img}
          width={"50px"}
          className="-translate-y-32 translate-x-64 absolute"
        />

        <div className="mb-4 text-gray-700">
          <div className="flex">
            당신은
            <span className={`${valueColor} pl-1`}>{value}</span>
            공유 이벤트 증정 대상자입니다.
          </div>

          <div>자신의 언어 유형 결과를 캡쳐하여</div>

          <div className="text-blue-500">융합소프트웨어 인스타그램 태그와</div>

          <div>
            스토리 공유 후 부스 방문 시
            <span className="text-pink-500"> 선착 100명</span>에게
          </div>

          <div>
            <span className={`${valueColor}`}> {value}</span> 증정드립니다.
          </div>
        </div>

        <div className="text-gray-400 mb-4">
          본 이벤트는 축제 기간 한정 운영됩니다.
        </div>
        <HorizontalLine margin="my-4" />
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
