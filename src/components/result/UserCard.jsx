import React from "react";

export default function UserCard({ user, userType, handleConfirmPick }) {
  return (
    <div
      onClick={() => handleConfirmPick(user.id)}
      className={`flex justify-center items-center w-full cursor-pointer rounded-xl shadow-xl`}
    >
      <div
        className={`bg-white transition-all duration-300 hover:bg-slate-50 hover:bg-opacity-40 rounded-md w-full flex flex-col justify-between text-center`}
        style={{ minHeight: "260px", maxHeight: "260px" }}
      >
        <div
          className={`w-full whitespace-nowrap border-b-2 border-opacity-20 px-3 py-3 ${userType.borderColor} ${userType.textColor} text-center rounded-t-lg`}
        >
          <div
            className={`${userType.gradient} ${userType.borderColor} w-min px-8 border-2 rounded-full flex text-xs font-sans py-1`}
          >
            {userType.label}
          </div>
        </div>

        {/* 유저 소개 */}
        <div className="w-full flex-grow px-4 ">
          <div className="text-base text-start pt-4 text-neutral-700">
            {user.INTRODUCTION}
          </div>
        </div>

        {/* 이모지: 항상 카드 하단에 위치 */}
        <div className="w-full px-4">
          <div className="text-8xl flex justify-center pb-4 ">{user.EMOJI}</div>
        </div>
      </div>
    </div>
  );
}
