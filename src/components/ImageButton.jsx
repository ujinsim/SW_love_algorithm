"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FloatingImage from "@/components/FloatingImage";
import TitleContent from "@/components/TitleContent";

export default function ImageButton({ imageSrc, imageAlt, title, content }) {
  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center w-full mb-8 shadow-lg rounded-lg bg-white hover:bg-pink-50 transition-colors duration-300 border-pink-100 border-2 cursor-pointer"
    >
      <FloatingImage
        src={imageSrc}
        alt={imageAlt}
        className="w-3/5 max-w-[160px] h-auto"
      />
      <TitleContent title={title} content={content} />
    </div>
  );
}
