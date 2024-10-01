import React from "react";
import Image from "next/image";
import HorizontalLine from "../HorizontalLine";

export default function AdModal({
  value,
  valueColor = "text-yellow-800",
  onClose,
  img,
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 ">
      <div className="relative bg-white shadow-lg p-6 rounded-xl max-w-[370px] text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-pink-600 mb-5">환영합니다 !</h2>

        {/* Optimized Next.js Image */}
        <Image
          src={img}
          alt="상품이미지"
          width={130}
          height={200}
          className="absolute -translate-y-36 translate-x-56"
        />

        {/* Event Message */}
        <div className="mb-4 text-gray-700 whitespace-nowrap">
          <p className="flex items-center justify-center">
            <span className={`${valueColor} pl-1`}>카카오페이 상품권</span>
            공유 이벤트 참여가능합니다 !!
          </p>

          <div className="bg-pink-100 rounded-lg py-3 px-2 flex flex-col justify-start my-4 space-y-2 gap-1">
            <p className="text-pink-500 text-left">
              1️⃣ 자신의 유형 결과를 캡쳐하여 공개계정으로
            </p>
            <p className="text-pink-500 text-left">
              2️⃣ 융소 인스타그램(@mju_sw) 태그하여 스토리
            </p>
            <p className="text-pink-500 text-left">
              3️⃣ 업로드 후 참여 완료 ! 팔로우 및 DM 전송
            </p>
          </div>

          <p className="pt-3">
            <span className="text-pink-500"> 다섯 분</span>에게
          </p>

          <p>
            <span className={valueColor}>카카오페이 3만원권</span> 증정드립니다.
          </p>
        </div>

        {/* Footer Message */}
        <div className="text-gray-400 mb-4">
          본 이벤트는 축제 기간 한정 운영됩니다.
        </div>

        <HorizontalLine margin="my-4" />

        {/* Close Button */}
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
