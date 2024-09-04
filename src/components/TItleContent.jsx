import React from "react";

export default function TitleContent({ title, content }) {
  return (
    <div className="rounded-3xl border border-transparent flex justify-start w-full flex-col ">
      <div className="pb-2 text-2xl font-sans text-black">{title}</div>
      <div className="text-sm font-sans text-gray-700 my-4">{content}</div>
    </div>
  );
}
