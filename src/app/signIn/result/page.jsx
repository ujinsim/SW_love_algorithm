"use client";

import React, { useEffect, useState, useRef } from "react";
import { getUserData, getAllUsers } from "@/utils/features/users";
import { useAuthStore } from "@/store/authStore";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { fetchCompatibleUsers } from "@/utils/features/users";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [pickData, setPickData] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const instagramId = useAuthStore((state) => state.instagramId);
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null);
  const observerRef = useRef(null);
  //선택시 새로고침하기 추가

  useEffect(() => {
    const fetchUserData = async () => {
      if (instagramId) {
        try {
          const data = await getUserData(instagramId);
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [instagramId]);

  useEffect(() => {
    const fetchAllUserData = async () => {
      if (userData) {
        setLoading(true);
        try {
          const { users, lastVisibleDoc } = await getAllUsers();
          setAllUsers(users);
          setLastVisibleDoc(lastVisibleDoc);
        } catch (error) {
          console.error("Error fetching all users:", error);
        }
        setLoading(false);
      }

      if (!userData) {
        // userData가 없을 때 데이터를 가져옴 (비회원 상태)
        setLoading(true);
        try {
          const { users } = await getAllUsers();
          setAllUsers(users); // 비회원 데이터를 상태에 저장
          setLastVisibleDoc(null); // lastVisibleDoc 업데이트는 필요 없음
        } catch (error) {
          console.error("Error fetching all users:", error);
        } finally {
          setLoading(false); // 로딩 상태 종료
        }
      }
    };

    fetchAllUserData();
  }, [userData]);

  useEffect(() => {
    const fetchPickData = async () => {
      if (userData && userData.PICK_ID.length > 0) {
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
  const typeMap = {
    AAA: {
      label: "파이썬 유형",
      borderColor: "border-green-500",
      gradient: "bg-gradient-to-b from-green-300 via-green-500 to-green-700",
      textColor: "text-green-700",
    },
    ABA: {
      label: "자바 유형",
      borderColor: "border-blue-500",
      gradient: "bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700",
      textColor: "text-blue-700",
    },
    AAB: {
      label: "MySQL 유형",
      borderColor: "border-orange-500",
      gradient: "bg-gradient-to-b from-orange-300 via-orange-500 to-orange-700",
      textColor: "text-orange-700",
    },
    ABB: {
      label: "자바스크립트 유형",
      borderColor: "border-yellow-500",
      gradient: "bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700",
      textColor: "text-yellow-700",
    },
    BAA: {
      label: "어셈블리어 유형",
      borderColor: "border-gray-500",
      gradient: "bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700",
      textColor: "text-gray-700",
    },
    BAB: {
      label: "C++ 유형",
      borderColor: "border-red-500",
      gradient: "bg-gradient-to-b from-red-300 via-red-500 to-red-700",
      textColor: "text-red-700",
    },
    BBA: {
      label: "루비 유형",
      borderColor: "border-pink-500",
      gradient: "bg-gradient-to-b from-pink-300 via-pink-500 to-pink-700",
      textColor: "text-pink-700",
    },
    BBB: {
      label: "Go 유형",
      borderColor: "border-purple-500",
      gradient: "bg-gradient-to-b from-purple-300 via-purple-500 to-purple-700",
      textColor: "text-purple-700",
    },
  };

  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-[95%] bg-green-900 max-w-[500px] bg-opacity-20 my-10 rounded-xl">
        <div className="w-full bg-green-900 bg-opacity-20 rounded-xl mb-10">
          <header className="text-2xl p-4 flex bg-black rounded-t-xl relative">
            <span className="text-xs w-full justify-start pt-2">🟠 🟤 🔴</span>
            <div className="z-10 justify-center w-full">memos.....</div>
          </header>
        </div>

        {/* 비회원일 경우 */}
        {!userData ? (
          <div className="text-center text-black flex w-full flex-col">
            비회원 상태입니다
            <button className="p-2 mx-32 bg-red-600 rounded-xl">
              로그인 하러가기
            </button>
            {/* 비회원 메모 보여주기 */}
            {allUsers.length > 0 ? (
              <ul className="flex flex-wrap gap-12 w-full pt-4">
                {allUsers.map((user, index) => {
                  const userType = typeMap[user.TYPE] || {
                    label: "Unknown",
                    borderColor: "border-gray-500",
                    gradient:
                      "bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700",
                    textColor: "text-gray-700",
                  };

                  const rotation = index % 2 === 0 ? "-6deg" : "6deg";

                  return (
                    <li
                      key={user.id}
                      className="border-solid border-2 border-black box-border"
                      style={{ transform: `rotate(${rotation})` }}
                    >
                      <div
                        className={`w-full ${userType.gradient} hover:scale-105`}
                      >
                        <div
                          className={`w-full border-b-2 border-opacity-15 p-4 ${userType.borderColor} ${userType.textColor} text-center rounded-t-lg py-3`}
                        >
                          {userType.label}
                        </div>
                        <div className="w-full rounded-b-lg p-4 text-center shadow-md border-2 border-transparent">
                          {user.INTRODUCTION}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>유저가 없습니다.</p>
            )}
          </div>
        ) : (
          <div className="text-black">
            {/* 유저 정보 표시 */}
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

              <div className="flex flex-col text-black font-sans text-2xl">
                <span className="flex items-center gap-2">
                  <RiCheckboxBlankLine />
                  여자
                </span>
                <span className="flex gap-2">
                  <RiCheckboxBlankLine />
                  남자
                </span>
              </div>
            </div>

            {/* PICK_ID가 있을 경우 선택된 유저만 표시 */}
            {userData.PICK_ID && userData.PICK_ID.length > 0 ? (
              <div>
                <p>
                  <strong>내가 뽑은 아이디:</strong> {userData.PICK_ID}
                </p>
                <p>
                  <strong>내가 뽑은 아이디 자소:</strong>{" "}
                  {pickData?.INTRODUCTION}
                </p>
                <p>
                  <strong>내가 뽑은 아이디 이모지:</strong> {pickData?.EMOJI}
                </p>
              </div>
            ) : (
              <div>
                {/* PICK_ID가 없으면 모든 유저 표시 */}
                {allUsers.length > 0 ? (
                  <ul className="flex flex-wrap gap-12 w-full pt-4">
                    {allUsers.map((user, index) => {
                      const userType = typeMap[user.TYPE] || {
                        label: "Unknown",
                        borderColor: "border-gray-500",
                        gradient:
                          "bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700",
                        textColor: "text-gray-700",
                      };

                      const rotation = index % 2 === 0 ? "-6deg" : "6deg";

                      const handleConfirmPick = async (userId) => {
                        try {
                          setLoading(true); // 로딩 시작
                          await fetchCompatibleUsers(instagramId, userId); // API 호출
                          alert("유저가 선택되었습니다.");
                        } catch (error) {
                          console.error("유저 선택에 실패했습니다.", error);
                        } finally {
                          setLoading(false); // 로딩 종료
                        }
                      };

                      return (
                        <li
                          onClick={() => handleConfirmPick(user.id)}
                          key={user.id}
                          className="border-solid border-2 border-black box-border cursor-pointer"
                          style={{ transform: `rotate(${rotation})` }}
                        >
                          <div
                            className={`w-full ${userType.gradient} hover:scale-105`}
                          >
                            <div
                              className={`w-full border-b-2 border-opacity-15 p-4 ${userType.borderColor} ${userType.textColor} text-center rounded-t-lg py-3`}
                            >
                              {userType.label}
                            </div>
                            <div className="w-full rounded-b-lg p-4 text-center shadow-md border-2 border-transparent">
                              {user.INTRODUCTION}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>유저가 없습니다.</p>
                )}
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
