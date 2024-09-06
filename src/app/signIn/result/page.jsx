"use client";

import React, { useEffect, useState } from "react";
import { getUserData } from "@/utils/features/users";
import { fetchCompatibleUsers } from "@/utils/features/match";
import { useAuthStore } from "@/store/authStore";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [pickData, setPickData] = useState([]);
  const [compatibleUsers, setCompatibleUsers] = useState([]);
  const instagramId = useAuthStore((state) => state.instagramId);

  useEffect(() => {
    const fetchUserData = async () => {
      if (instagramId) {
        try {
          const data = await getUserData(instagramId);
          setUserData(data);

          if (data) {
            const compatibleUsersList = await fetchCompatibleUsers(
              data.TARGET_GENDER,
              data.TYPE,
              instagramId
            );
            setCompatibleUsers(compatibleUsersList);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [instagramId]);

  useEffect(() => {
    const fetchPickData = async () => {
      if (userData && userData.PICK_ID) {
        try {
          const pickUserData = await getUserData(userData.PICK_ID);

          setPickData(pickUserData);
        } catch (error) {
          console.error("Error fetching pick data:", error);
        }
      }
    };

    fetchPickData();
  }, [userData]);

  console.log(userData, "유저데이터");
  console.log(pickData, "픽데이터");

  return (
    <div>
      {userData ? (
        <div className="text-black">
          <h1>User Profile</h1>
          <p>Gender: {userData.GENDER}</p>
          <p>Instagram ID: {instagramId}</p>
          <p>Introduction: {userData.INTRODUCTION}</p>
          <p>Type: {userData.TYPE}</p>
          <p>내가 뽑은 아이디: {userData.PICK_ID}</p>
          <p>내가 뽑은 아이디 자소: {pickData.INTRODUCTION}</p>
          <p>내가 뽑은 아이디 이모지: {pickData.EMOJI}</p>
        </div>
      ) : (
        <p className="text-black">Loading user data...</p>
      )}
    </div>
  );
}
