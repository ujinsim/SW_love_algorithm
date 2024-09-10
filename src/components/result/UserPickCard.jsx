"use client";
import React, { useEffect, useState } from "react";
import { typeMap } from "@/constants/typeMap";

export default function UserPickCard({ user, userType }) {
  const userData = typeMap[userType];
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setRotation(scrollTop / 1); // 스크롤에 따라 회전 조정
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center w-full cursor-pointer rounded-xl perspective">
      <div
        className="card-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className="card front">
          <div
            className={`w-full justify-center whitespace-nowrap border-b-2 border-opacity-20 px-12 py-5 ${
              userData.borderColor || "border-gray-300"
            } ${
              userData.textColor || "text-gray-900"
            } text-center rounded-t-lg`}
          >
            <div
              className={`${userData.gradient || "bg-gray-100"} ${
                userData.borderColor || "border-gray-300"
              } border-2 justify-center rounded-full flex text-xl font-sans py-1`}
            >
              {userData.label}
            </div>
          </div>

          <div className="w-full px-10">
            <div className="text-2xl px-10 pt-4 text-neutral-700">
              {user.INTRODUCTION}
            </div>
          </div>

          <div className="flex justify-center items-start w-full px-4 py-8">
            <div className="text-9xl">{user.EMOJI}</div>
          </div>
        </div>

        <div className="card back">
          <div className="text-2xl px-10 pt-12 text-neutral-700">
            {user.INSTAGRAM_ID}
          </div>
        </div>
      </div>
    </div>
  );
}
