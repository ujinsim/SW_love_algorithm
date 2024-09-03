import React from "react";
import { RxTriangleRight } from "react-icons/rx";

export default function InfoComponent({ text }) {
  return (
    <div className="text-gray-700 px-2 font-sans font-bold text-sm flex items-center">
      <RxTriangleRight className="text-base" />
      {text}
    </div>
  );
}
