"use client";
import React, { useState, useEffect } from "react";
import { types } from "@/constants/types";
import { typeMap } from "@/constants/typeMap.js";
import { getUserData } from "@/utils/features/users";
import UserPickCard from "./UserPickCard";

const UserProfile = ({ userData, instagramId }) => {
  const userType = typeMap[userData.TYPE] || {};
  const borderColor = userType.borderColor || "border-gray-300";
  const textColor = userType.textColor || "text-gray-900";
  const bgColor = userType.gradient || "bg-gray-100";

  const pickUserId = userData.PICK_ID || "";

  const [pickUserData, setPickData] = useState(null);

  // 사용자 유형 코드
  const userCode = userData.TYPE;

  const compatibleTypes = types.filter((type) =>
    type.compatibleWith.includes(userCode)
  );

  useEffect(() => {
    const fetchPickData = async () => {
      if (pickUserId) {
        try {
          const pickUserData = await getUserData(pickUserId);
          setPickData(pickUserData);
        } catch (error) {
          console.error("Error fetching pick data:", error);
        }
      }
    };

    fetchPickData();
  }, [pickUserId]);

  return (
    <div className="w-full text-black">
      <div className="flex flex-col items-center w-full px-5 mb-6">
        <p className="py-4 font-sans text-lg text-center w-full ">
          {instagramId}님 환영합니다! 🎉
        </p>
        <div className="shadow-lg rounded-3xl p-6 bg-white w-full">
          <div className="flex items-center gap-6 w-full">
            <div
              className={`text-7xl p-4 border-4 rounded-full ${borderColor} shadow-md bg-gray-50`}
            >
              {userData.EMOJI}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p
                className={`font-bold text-lg ${textColor} rounded-lg py-1 px-3 bg-opacity-20 bg-gray-200 text-center`}
              >
                {typeMap[userData.TYPE]?.label || "알 수 없음"}
              </p>
              <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg shadow-inner">
                {userData.INTRODUCTION}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-6">
        {userData.PICK_ID ? (
          pickUserData && (
            <div className="max-w-[400px] flex flex-col w-full h-[530px]">
              <UserPickCard user={pickUserData} userType={pickUserData.TYPE} />
            </div>
          )
        ) : (
          <div className="mt-4 px-5 font-thin text-neutral-600 py-2 bg-white bg-opacity-60">
            <p>이 유형은 나와 잘 맞아요 👏</p>
            <div className="flex flex-wrap gap-4 mt-2">
              {compatibleTypes.length > 0 ? (
                compatibleTypes.map((type) => (
                  <div
                    key={type.code}
                    className="flex items-center gap-1 p-2 rounded-lg"
                  >
                    <img
                      src={`../${type.type.src}`}
                      alt={type.type.label}
                      width={type.type.width}
                      className="h-4 w-4"
                    />
                    <span className="text-xs font-sans">{type.type.label}</span>
                  </div>
                ))
              ) : (
                <p>호환되는 유형이 없습니다.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
