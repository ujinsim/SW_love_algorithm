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
    <button className="flex flex-col rounded-lg items-center w-full transition-colors duration-300">
      <FloatingImage src="/images/mainLogo.png" alt="test" />

      <TitleContent
        onClick={moveTest}
        subtitle={"프로그래밍 언어로 알아보는 "}
        title="나의 연애 유형은..? 🤔"
        content="테스트 하러가기"
      />
    </button>
  );
}
