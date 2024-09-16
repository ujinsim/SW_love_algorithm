"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  getUserData,
  getAllUsers,
  fetchCompatibleUsers,
} from "@/utils/features/users";
import { useAuthStore } from "@/store/authStore";
import { useTabStore } from "@/store/useTapStore";
import UserCard from "@/components/result/UserCard";
import UserProfile from "@/components/result/UserProfile";
import { typeMap } from "@/constants/typeMap.js";
import "react-loading-skeleton/dist/skeleton.css";
import ConfirmModal from "@/components/ConfirmModal";
import Navbar from "@/components/NavBar";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [selectUserId, setSelectedUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingMore, setFetchingMore] = useState(false);
  const instagramId = useAuthStore((state) => state.instagramId);
  const { activeTab, setActiveTab } = useTabStore();
  const [lastVisibleDoc, setLastVisibleDoc] = useState(null);
  const observerRef = useRef(null);
  const tabRef = useRef(null);
  const [isTabSticky, setIsTabSticky] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setError] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      if (instagramId) {
        try {
          const data = await getUserData(instagramId);
          setUserData(data);
          setPickUserId(data.PICK_ID);
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
      setAllUsers([]);
      setLastVisibleDoc(null);
      try {
        const { users, lastVisibleDoc } = await getAllUsers(
          null,
          activeTab === "전체" ? null : activeTab === "여자" ? "FEMALE" : "MALE"
        );
        setAllUsers(users);
        setLastVisibleDoc(lastVisibleDoc);
      } catch (error) {
        console.error("Error fetching all users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUserData();
  }, [activeTab]);

  const fetchUsers = async () => {
    if (loading || !lastVisibleDoc) return;
    setFetchingMore(true);
    try {
      const { users, lastVisibleDoc: newLastVisibleDoc } = await getAllUsers(
        lastVisibleDoc,
        activeTab === "전체" ? null : activeTab === "여자" ? "FEMALE" : "MALE"
      );
      setAllUsers((prevUsers) => [...prevUsers, ...users]);
      setLastVisibleDoc(newLastVisibleDoc);
    } catch (error) {
      console.error("Error fetching more users:", error);
    } finally {
      setFetchingMore(false);
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
  }, [lastVisibleDoc, activeTab]);

  // 유저 선택 시 모달을 여는 함수
  const handlePickUser = (id) => {
    setSelectedUserId(id); // 선택한 유저의 ID를 저장
    setModalOpen(true); // 모달 열기
  };
  // 모달에서 유저 선택을 확정하는 함수
  const handleConfirmPick = async () => {
    if (!selectUserId) return; // 선택된 유저가 없으면 종료

    try {
      setLoading(true); // 로딩 상태 시작
      await fetchCompatibleUsers(instagramId, selectUserId); // 유저 선택 API 호출
      alert("유저가 선택되었습니다.");
      window.location.reload(); // 유저 선택 후 페이지 새로고침
    } catch (error) {
      setError("유저 선택에 실패했습니다.");
      console.error(error);
    } finally {
      setLoading(false); // 로딩 상태 종료
      setModalOpen(false); // 모달 닫기
    }
  };

  // 모달 취소 시 호출되는 함수
  const handleCancelPick = () => {
    setModalOpen(false); // 모달 닫기
  };
  return (
    <div className="bg-gradient-to-b from-white via-purple-300 to-pink-300 min-h-dvh py-2 w-full overflow-hidden flex items-center justify-center">
      <div className="w-full bg-opacity-20 max-w-[500px] my-12 rounded-xl">
        <div className="bg-white shadow-md rounded-t-xl"></div>

        <div>
          <div>
            {!userData ? (
              <></>
            ) : (
              <>
                <UserProfile userData={userData} instagramId={instagramId} />
              </>
            )}
          </div>

          {userData?.PICK_ID?.length === 0 && (
            <div className="w-full py-2">
              <div
                ref={tabRef}
                className={`flex w-full p-0 -top-0 ${
                  isTabSticky
                    ? "fixed top-0 left-0 w-full z-50 bg-none bg-white "
                    : ""
                }`}
              >
                {["전체", "남자", "여자"].map((tab) => (
                  <div
                    key={tab}
                    className={`flex-1 text-center py-3 cursor-pointer rounded-b-xl ${
                      activeTab === tab
                        ? "bg-gradient-to-b from-purple-100 via-pink-200 text-black font-bold shadow-xl"
                        : "bg-white text-gray-500"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <div className="flex w-full flex-wrap px-2">
                {allUsers.length > 0 &&
                  allUsers.map((user) => {
                    const userType = typeMap[user.TYPE];
                    return (
                      <div
                        key={user.id}
                        className=" py-4 w-1/2 px-2 flex flex-col"
                      >
                        <UserCard
                          user={user}
                          userType={userType}
                          handleConfirmPick={() => handlePickUser(user.id)}
                          emoji={user.EMOJI}
                          intro={user.INTRODUCTION}
                        />
                      </div>
                    );
                  })}
              </div>
              {!loading && !lastVisibleDoc && (
                <div className="w-full flex flex-col justify-center items-center py-3 mt-12 mb-8">
                  <p>더 이상 카드가 존재하지 않습니다.</p>
                </div>
              )}
            </div>
          )}
        </div>

        <ConfirmModal
          isOpen={isModalOpen}
          onConfirm={handleConfirmPick}
          onCancel={handleCancelPick}
          loading={loading}
        />

        <div ref={observerRef} className="py-3"></div>

        {fetchingMore && (
          <div className="flex justify-center py-8">
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );
}
