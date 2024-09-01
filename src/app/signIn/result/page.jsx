"use client";
import React, { useEffect, useState } from "react";
import { getUserData } from "@/utils/features/users";
import { useAuthStore } from "@/store/authStore";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [pickIntros, setPickIntros] = useState([]);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        const data = await getUserData(user.uid);
        setUserData(data);

        if (data && data.PICK_ID && Array.isArray(data.PICK_ID)) {
          const pickIntroPromises = data.PICK_ID.map((pickId) =>
            getUserData(pickId).then((pickData) => pickData.INTRODUCTION)
          );
          const intros = await Promise.all(pickIntroPromises);
          setPickIntros(intros);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div>
      {userData ? (
        <div className="text-black">
          <h1>User Profile</h1>
          <p>Gender: {userData.GENDER}</p>
          <p>Instagram ID: {userData.INSTAGRAM_ID}</p>
          <p>Introduction: {userData.INTRODUCTION}</p>
          <p>내가 뽑은 아이디: {userData.PICK_ID?.join(", ")}</p>
          <p>내가 뽑은 아이디 자소: {pickIntros.join(", ")}</p>
        </div>
      ) : (
        <p className="text-black">Loading user data...</p>
      )}
    </div>
  );
}
