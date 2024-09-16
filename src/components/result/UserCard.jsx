import React from "react";

export default function UserCard({ user, userType, handleConfirmPick }) {
  return (
    <div
      onClick={() => handleConfirmPick(user.id)}
      className="flex justify-center items-center w-full cursor-pointer rounded-xl shadow-xl text-center"
    >
      <div
        className="bg-white transition-all duration-300 rounded-md w-full flex flex-col justify-between text-center"
        style={{ minHeight: "12vh", maxHeight: "25vh" }}
      >
        {/* 경계선 */}
        <hr className={`border-4 ${userType.borderColor} w-full mx-auto`} />

        {/* 상단 이모지 및 레이블 영역 */}
        <div className="flex w-full px-6 py-1 items-center justify-between">
          {/* 이모지 */}
          <div
            className={`text-4xl p-1 ${userType.borderColor} flex items-center justify-center`}
            style={{ width: "12%" }}
          >
            {user.EMOJI}
          </div>

          {/* 유저 타입 레이블 */}
          <div className="w-full pl-4 flex flex-col items-start justify-center">
            <div
              className={`border-2 ${userType.borderColor} w-min px-3 rounded-md flex text-sm font-sans py-1 whitespace-nowrap text-gray-600`}
            >
              {userType.label}
            </div>
          </div>
        </div>

        {/* 유저 소개 */}
        <div className="w-full pb-3 px-4">
          <div className="bg-slate-100 rounded-lg px-2 py-4">
            <div className="text-base text-start text-neutral-700">
              {user.INTRODUCTION}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
