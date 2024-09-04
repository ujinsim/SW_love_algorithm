"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

export default function MainButton({
  title,
  text,
  variant = "default",
  onClick,
}) {
  const router = useRouter();

  const baseStyles =
    "w-full flex items-center justify-between rounded-xl py-3 px-5 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105";

  const variantStyles = {
    primary: "bg-pink-200 hover:bg-pink-300 text-gray-900 border-pink-300",
    secondary:
      "bg-purple-100 hover:bg-purple-200 text-gray-900 border-purple-300",
    tertiary:
      "bg-yellow-100 hover:bg-yellow-200 text-gray-900 border-yellow-300",
  };

  const handleClick = () => {
    if (onClick) {
      router.push(onClick);
    }
  };

  return (
    <div className="rounded-2xl border border-transparent">
      <button
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles[variant]} border-2`}
      >
        <div className="flex flex-col justify-start w-full text-start">
          <div className="text-xl font-sans">{title}</div>
          <div className="text-sm font-sans text-gray-700 mt-1 ">{text}</div>
        </div>
        <IoIosArrowForward className="text-xl text-gray-700" />
      </button>
    </div>
  );
}
