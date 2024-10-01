"use client";
import React, { useState } from "react";
import TypeCarousel from "@/components/main/TypeCarousel";
import TestButton from "@/components/main/TestButton";
import SideButtons from "@/components/main/SideButtons";
import { RxTriangleRight } from "react-icons/rx";
import AdModal from "@/components/advertisement/adModal";

export default function page() {
  const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-b from-white via-purple-300 to-pink-500 min-h-dvh w-full overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <div className="w-[94%]  from-white rounded-3xl h-full px-2 py-5 pt-0">
          <TypeCarousel />

          <TestButton />

          <div className="text-zinc-100 px-2 font-sans font-bold text-sm flex items-center">
            <RxTriangleRight className="text-base text-zinc-100 " />
            카드 만들기 전 테스트를 진행해주세요
          </div>

          <SideButtons />
        </div>
      </div>

      {showModal && (
        <AdModal
          value={"카카오페이 3만원 상품권 "}
          valueColor="text-yellow-500"
          img={"/images/ryan.png"}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
