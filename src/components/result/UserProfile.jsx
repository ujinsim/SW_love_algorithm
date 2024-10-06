"use client";
import React, { useState, useEffect } from "react";
import { typeMap } from "@/constants/typeMap.js";
import { getUserData } from "@/utils/features/users";
import UserPickCard from "./UserPickCard";
import CompatibleTypes from "../CompatibleTypes";

const UserProfile = ({ userData, instagramId }) => {
  const userType = typeMap[userData.TYPE] || {};
  const borderColor = userType.borderColor || "border-gray-300";
  const textColor = userType.textColor || "text-gray-900";

  const pickUserId = userData.PICK_ID || "";
  const [pickUserData, setPickData] = useState(null);

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
      <div className="flex flex-col items-center w-full px-3 ">
        <p className="py-4 text-xl text-center w-full ">
          {instagramId}님 환영합니다! 🎉
        </p>
        <div className="shadow-lg rounded-3xl p-6 bg-white w-full">
          <div className="flex items-center gap-6 w-full">
            <div
              className={`text-7xl p-4 border-4 rounded-full ${borderColor} `}
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
          <CompatibleTypes userCode={userData.TYPE} size="small" />
        </div>
      </div>

      <div className="w-full flex justify-center mb-6">
        {userData.PICK_ID.length > 0 && pickUserData && (
          <div className="max-w-[400px] flex flex-col w-full h-[530px]">
            <UserPickCard user={pickUserData} userType={pickUserData.TYPE} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
