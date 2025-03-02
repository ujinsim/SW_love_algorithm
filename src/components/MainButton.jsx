"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function MainButton({ title, text, onClick, emoji }) {
  const router = useRouter();

  const baseStyles =
    "w-full flex flex-col rounded-xl py-3 px-2 shadow-md transition-transform duration-300 ease-in-out transform w-full justify-start text-start ";

  const handleClick = () => {
    if (onClick) {
      router.push(onClick);
    }
  };
  const hoverStyles =
    "hover:shadow-lg transition-transform duration-300 ease-in-out transform ";

  return (
    <div
      className={`${hoverStyles} w-full rounded-2xl border border-transparent `}
    >
      <button
        onClick={handleClick}
        className={`${baseStyles} bg-gradient-to-b from-white to-pulple-400 `}
      >
        <div className="text-xl text-neutral-700">{title}</div>
        <div
          className="text-sm text-neutral-800 mt-2 w-full justify-start flex whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="text-7xl pt-2">{emoji}</div>
      </button>
    </div>
  );
}
