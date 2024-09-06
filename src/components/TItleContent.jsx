import React from "react";

export default function TitleContent({ title, content }) {
  return (
    <div className="rounded-3xl border border-transparent flex justify-start w-full flex-col ">
      <div className="pb-1 text-2xl font-sans text-white">{title}</div>
      <div className="text-sm font-sans text-gray-800 my-2 hover:text-gray-600">
        {content}
      </div>
    </div>
  );
}
