"use client";
import React from "react";
import FloatingImage from "@/components/FloatingImage";
import TitleContent from "../TItleContent";
import { useRouter } from "next/navigation";

export default function TestButton() {
  const router = useRouter();

  const moveTest = () => {
    router.push("/test");
  };

  return (
    <button
      onClick={moveTest}
      className="flex flex-col rounded-lg items-center w-full mb-4 transition-colors duration-300"
    >
      <FloatingImage
        src="images/mainLogo.png"
        alt="test"
        className="w-4/5 max-w-[250px] h-auto"
      />
      <TitleContent title="나의 연애 유형은..? 🤔" content="테스트 하러가기" />
    </button>
  );
}
