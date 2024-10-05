import React from "react";

export default function UserCard({ user, userType, handleConfirmPick }) {
  // 마지막 10글자 전에 나오는 첫 번째 띄어쓰기를 기준으로 줄바꿈 처리
  const formatIntroduction = (text) => {
    const position = text.length - 10;
    const substringBeforePosition = text.substring(0, position);
    const lastSpaceBeforePosition = substringBeforePosition.lastIndexOf(" ");

    if (lastSpaceBeforePosition !== -1) {
      // 띄어쓰기가 있으면 그 위치에서 줄바꿈
      return (
        <>
          {text.substring(0, lastSpaceBeforePosition)}
          <br />
          {text.substring(lastSpaceBeforePosition + 1)}
        </>
      );
    }
    // 띄어쓰기가 없으면 원래 텍스트 반환
    return text;
  };

  return (
    <div
      onClick={() => handleConfirmPick(user.id)}
      className={`flex justify-center items-center w-full cursor-pointer rounded-xl`}
    >
      <div
        className={`bg-white transition-all duration-300 hover:bg-slate-50 rounded-md w-full flex flex-col justify-between text-center`}
        style={{ minHeight: "260px", maxHeight: "260px" }}
      >
        {/* 유형명 */}
        <div
          className={`text-white w-full whitespace-nowrap border-b-2 border-opacity-20 px-3 py-3 ${userType.borderColor} text-center rounded-t-lg`}
        >
          <div
            className={`${userType.gradient} ${userType.borderColor} w-min px-4 border-2 rounded-full flex text-sm py-1`}
          >
            {userType.label}
          </div>
        </div>

        {/* 유저 소개 */}
        <div className="w-full flex-grow px-4 ">
          <div className="text-base text-start pt-4 text-neutral-700">
            {formatIntroduction(user.INTRODUCTION)}
          </div>
        </div>

        {/* 이모지: 항상 카드 하단에 위치 */}
        <div className="w-full px-4">
          <div className="text-8xl flex justify-center pb-4">{user.EMOJI}</div>
        </div>
      </div>
    </div>
  );
}
