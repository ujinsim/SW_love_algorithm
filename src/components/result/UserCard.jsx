import React from "react";

export default function UserCard({
  user,
  userType,
  handleConfirmPick,
  emoji,
  intro,
}) {
  console.log(userType);
  return (
    <div
      onClick={() => handleConfirmPick(user.id)}
      className="text-center flex flex-col cursor-pointer w-full px-2 justify-center"
    >
      <div className={` ${userType.gradient} rounded-md w-full`}>
        <div
          className={`w-full whitespace-nowrap border-b-2 border-opacity-20 p-4 ${userType.borderColor} ${userType.textColor} text-center rounded-t-lg py-3`}
        >
          {userType.label}
        </div>

        <div className="text-9xl p-10">{user.EMOJI}</div>
        <div className=" rounded-b-lg p-4 text-center shadow-md border-2 border-transparent">
          {user.INTRODUCTION}
        </div>
      </div>
    </div>
  );
}
