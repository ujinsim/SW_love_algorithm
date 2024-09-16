"use client";
import React from "react";
import { typeMap } from "@/constants/typeMap";
import Button from "../Button";

export default function UserPickCard({ user, userType }) {
  const userData = typeMap[userType];

  // ID를 클립보드에 복사하는 함수
  const copyIdToClipboard = () => {
    navigator.clipboard
      .writeText(user.INSTAGRAM_ID)
      .then(() => {
        alert("ID가 클립보드에 복사되었습니다!");
      })
      .catch((error) => {
        console.error("복사 중 오류 발생:", error);
      });
  };

  return (
    <div className="flex justify-center items-center w-full cursor-pointer rounded-xl perspective min-h-max">
      <div className="card-container">
        <div className="card front">
          <div
            className={`w-full justify-center whitespace-nowrap border-b-2 border-opacity-20 px-12 py-5 ${
              userData.borderColor || "border-gray-300"
            } ${"text-white"} text-center rounded-t-lg`}
          >
            <div
              className={`${userData.gradient || "bg-gray-100"} ${
                userData.borderColor || "border-gray-300"
              } bg-opacity-20 border-4 justify-center rounded-full flex text-xl font-sans py-1`}
            >
              {userData.label}
            </div>
          </div>

          <div className="w-full px-10 justify-center flex">
            <div className="text-2xl px-10 pt-4 text-neutral-700">
              {user.INTRODUCTION}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full px-4 py-8">
            <div className="text-9xl">{user.EMOJI}</div>
            <div className="text-xl px-10 pt-5 pb-4 text-neutral-700">
              ID : {user.INSTAGRAM_ID}
            </div>

            <Button text={"아이디 복사하기"} onClick={copyIdToClipboard} />
          </div>
        </div>
      </div>
    </div>
  );
}
