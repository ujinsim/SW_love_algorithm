"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  getUserData,
  getAllUsers,
  fetchCompatibleUsers,
} from "@/utils/features/users";
import { useAuthStore } from "@/store/authStore";
import UserCard from "@/components/result/UserCard";
import { typeMap } from "@/constants/typeMap.js";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [pickData, setPickData] = useState(null);
  const [pickUserId, setPickUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const instagramId = useAuthStore((state) => state.instagramId);
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (instagramId) {
        try {
          const data = await getUserData(instagramId);
          setUserData(data);
          if (userData) {
            setPickUserId(userData.PICK_ID);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [instagramId]);

  useEffect(() => {
    const fetchAllUserData = async () => {
      setLoading(true);
      try {
        const { users, lastVisibleDoc } = await getAllUsers();
        setAllUsers(users);
        setLastVisibleDoc(lastVisibleDoc);
      } catch (error) {
        console.error("Error fetching all users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUserData();
  }, []);

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
  }, [userData]);

  const fetchUsers = async () => {
    if (loading || !lastVisibleDoc) return;
    setLoading(true);
    try {
      const { users, lastVisibleDoc: newLastVisibleDoc } = await getAllUsers(
        lastVisibleDoc
      );
      setAllUsers((prevUsers) => [...prevUsers, ...users]);
      setLastVisibleDoc(newLastVisibleDoc);
    } catch (error) {
      console.error("Error fetching more users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (lastVisibleDoc) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchUsers();
          }
        },
        { threshold: 1.0 }
      );

      const currentObserver = observerRef.current;
      if (currentObserver) observer.observe(currentObserver);

      return () => {
        if (currentObserver) observer.unobserve(currentObserver);
      };
    }
  }, [lastVisibleDoc]);

  console.log(allUsers, "올 유저");
  console.log(userData, "유저데이터");
  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-[95%] bg-green-900 bg-opacity-20 max-w-[500px] my-10 rounded-xl">
        {/* Header */}
        <header className="w-full bg-green-900 bg-opacity-20 rounded-xl mb-10">
          <div className="text-2xl p-4 flex bg-black rounded-t-xl relative">
            <span className="text-xs w-full justify-start pt-2">🟠 🟤 🔴</span>
            <div className="z-10 justify-center w-full">memos.....</div>
          </div>
        </header>

        {/* 비회원 상태 */}
        {!userData ? (
          <div className="text-center text-black flex w-full flex-col">
            비회원 상태입니다
            <button className="p-2 mx-32 bg-red-600 rounded-xl">
              로그인 하러가기
            </button>
            {allUsers.length > 0 ? (
              // flex 및 flex-wrap으로 한 줄에 두 개씩 표시
              <div className="flex flex-wrap justify-center gap-4 w-full pt-4">
                {allUsers.map((user, index) => {
                  const userType = typeMap[user.TYPE] || {};

                  return (
                    <div key={user.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                      <UserCard
                        user={user}
                        userType={userType}
                        handleConfirmPick={() => {}}
                        emoji={user.EMOJI}
                        intro={user.INTRODUCTION}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>유저가 없습니다.</p>
            )}
          </div>
        ) : (
          <div className="text-black">
            {/* 회원 상태 */}
            <div className="flex justify-between px-10">
              <div>
                <h1 className="text-2xl font-bold mb-4">내 정보</h1>
                <p>
                  <strong>ID:</strong> {instagramId}
                </p>
                <p>
                  <strong>내 소개:</strong> {userData.INTRODUCTION}
                </p>
                <p>
                  <strong>Type:</strong> {userData.TYPE}
                </p>
              </div>
            </div>

            {/* PICK_ID 유저 정보 */}
            {userData.PICK_ID.length > 0 ? (
              <div>
                <p>
                  <strong>내가 뽑은 유저 ID:</strong> {userData.PICK_ID}
                </p>
                <p>
                  <strong>소개:</strong> {pickData?.INTRODUCTION}
                </p>
                <p>
                  <strong>이모지:</strong> {pickData?.EMOJI}
                </p>
              </div>
            ) : (
              <div>
                <ul className="flex w-full px-10">
                  {allUsers.map((user) => {
                    const userType = typeMap[user.TYPE];

                    const handleConfirmPick = async (userId) => {
                      try {
                        setLoading(true);
                        await fetchCompatibleUsers(instagramId, userId);
                        alert("유저가 선택되었습니다.");
                      } catch (error) {
                        console.error("유저 선택에 실패했습니다.", error);
                      } finally {
                        setLoading(false);
                      }
                    };

                    return (
                      <div key={user.id} className="w-full p-2">
                        <UserCard
                          user={user}
                          userType={userType}
                          handleConfirmPick={() => {}}
                          emoji={user.EMOJI}
                          intro={user.INTRODUCTION}
                        />
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}

        <div ref={observerRef} className="py-3"></div>

        {loading && (
          <div className="flex justify-center py-8">
            <div>로딩중</div>
          </div>
        )}

        {!loading && !lastVisibleDoc && (
          <div className="w-full flex flex-col justify-center items-center py-3 mt-12 mb-8">
            <p>더 이상 메모가 존재하지 않습니다.</p>
          </div>
        )}

        {!loading && !lastVisibleDoc && (
          <div className="w-full flex flex-col justify-center items-center py-3 mt-12 mb-8">
            <p>더 많은 메모를 보고싶다면 ? 회원가입하기.</p>
          </div>
        )}
      </div>
    </div>
  );
}
