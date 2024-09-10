import React from "react";

export default function TitleContent({ title, content }) {
  return (
    <div className="rounded-3xl border border-transparent flex justify-start w-full flex-col">
      <div className="pb-1 text-2xl font-sans text-white">{title}</div>
      <div className="cursor-pointer my-5 text-sm font-sans text-white bg-pink-500 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105 active:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 shadow-lg mx-28 ">
        {content}
      </div>
    </div>
  );
}
