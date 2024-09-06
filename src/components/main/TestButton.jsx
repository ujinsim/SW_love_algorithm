import React from "react";
import FloatingImage from "@/components/FloatingImage";
import TitleContent from "../TItleContent";

export default function TestButton() {
  return (
    <button className="flex flex-col rounded-lg items-center w-full mb-4 transition-colors duration-300">
      <FloatingImage
        src="images/mainLogo.png"
        alt="test"
        className="w-4/5 max-w-[250px] h-auto"
      />
      <TitleContent title="나의 언어 유형은..? 🤔" content="테스트 하러가기" />
    </button>
  );
}
