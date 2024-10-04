"use client";
import React, { useState } from "react";
import TypeCarousel from "@/components/main/TypeCarousel";
import TestButton from "@/components/main/TestButton";
import SideButtons from "@/components/main/SideButtons";
import { RxTriangleRight } from "react-icons/rx";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white via-purple-300 to-purple-200 min-h-dvh w-full overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <header className="w-full fixed flex justify-start top-0 left-0 z-50 p-2 px-4 bg-opacity-35 text-black font-bold text-lg shadow-md">
          <p className="rounded-full p-1 px-3 flex items-center w-50 bg-white">
            💻 @MJU_SW
          </p>
        </header>

        <div className="w-[94%] from-white rounded-3xl h-full px-2 py-5 pt-24">
          <TestButton />
          <TypeCarousel />
          <div className="text-zinc-800 px-2 pt-10 font-bold text-sm flex items-center">
            <RxTriangleRight className="text-base text-zinc-900" />
            카드 만들기 전 테스트를 진행해주세요
          </div>
          <SideButtons />
        </div>
      </div>
    </div>
  );
}
