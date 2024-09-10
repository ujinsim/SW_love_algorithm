"use client";
import React, { useEffect, useState } from "react";
import { typeMap } from "@/constants/typeMap";

export default function UserPickCard({ user, userType }) {
  const userData = typeMap[userType];

  return (
    <div className="flex justify-center items-center w-full cursor-pointer rounded-xl perspective min-h-max">
      <div className="card-container">
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

          <div className="flex flex-col justify-center items-center w-full px-4 py-8">
            <div className="text-9xl">{user.EMOJI}</div>
            <div className="text-2xl px-10 pt-5 text-neutral-700">
              {user.INSTAGRAM_ID}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
