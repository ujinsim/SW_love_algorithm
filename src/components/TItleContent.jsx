import React from "react";

export default function TitleContent({ subtitle, title, content, onClick }) {
  return (
    <div className="rounded-4xl border border-transparent flex justify-start w-full flex-col max-w-80">
      <div className="pb-1 text-base font-sans text-white">{subtitle}</div>
      <div className=" text-2xl font-sans text-white">{title}</div>
      <div
        onClick={onClick}
        className="cursor-pointer my-5 text-2xl font-sans text-white bg-pink-500 py-3 px-4 rounded-2xl transition-all duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105 active:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 shadow-lg "
      >
        {content}
      </div>
    </div>
  );
}
