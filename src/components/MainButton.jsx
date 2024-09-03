"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function MainButton({
  title,
  text,
  variant = "default",
  onClick,
}) {
  const router = useRouter();

  const baseStyles =
    "w-full flex flex-col rounded-xl py-3 px-4 shadow-md transition-transform duration-300 ease-in-out transform ";

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
        <div className="text-xl font-sans">{title}</div>
        <div className="text-sm font-sans whitespace-nowrap text-gray-700 mt-1">
          {text}
        </div>
      </button>
    </div>
  );
}
