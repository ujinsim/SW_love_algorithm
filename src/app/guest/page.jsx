"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAllUsers } from "@/utils/features/users";
import UserCard from "@/components/result/UserCard";
import { typeMap } from "@/constants/typeMap.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const [allUsers, setAllUsers] = useState([]);
  const [lastVisibleDoc, setLastVisibleDoc] = useState();
  const [loading, setLoading] = useState(true);

  const observerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAllUserData = async () => {
      setLoading(true);
      setAllUsers([]);
      setLastVisibleDoc(null);
      try {
        const { users, lastVisibleDoc } = await getAllUsers(null);
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

  const handleNavigate = (path) => {
    router.push(path);
  };

  const renderSkeletonCard = () => (
    <div className="py-4 w-1/2 px-2 flex flex-col">
      <div className="p-8 bg-white shadow-lg rounded-xl justify-start">
        <Skeleton height={20} width={`80%`} style={{ marginTop: 20 }} />
        <Skeleton height={100} width={`80%`} style={{ marginTop: 40 }} />
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-white via-pink-300 to-pink-200 min-h-dvh w-full overflow-hidden flex items-center justify-center">
      <div className="w-full bg-opacity-20 max-w-[500px] rounded-xl flex flex-col text-center justify-center">
        {loading ? (
          <>
            <div className="flex w-full flex-wrap px-2">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <React.Fragment key={index}>
                    {renderSkeletonCard()}
                  </React.Fragment>
                ))}
            </div>
          </>
        ) : (
          <>
            {/* 비회원 상태 */}
            <div className="flex px-20 mx-5 py-10 flex-col text-center justify-center rounded-lg">
              <p className="text-base text-neutral-600 py-4">
                이미 카드를 만들었다면?
              </p>
              <Button
                text={"로그인 하러 가기"}
                onClick={() => handleNavigate("/signIn")}
              />
            </div>

            {/* 유저 카드 목록 */}
            <div>
              <div className="flex w-full flex-wrap px-2">
                {allUsers.length > 0 &&
                  allUsers.map((user) => {
                    const userType = typeMap[user.TYPE];
                    return (
                      <div
                        key={user.id}
                        className="py-4 w-1/2 px-2 flex flex-col"
                      >
                        <UserCard
                          user={user}
                          userType={userType}
                          emoji={user.EMOJI}
                          intro={user.INTRODUCTION}
                          handleConfirmPick={() =>
                            alert("카드 제작 후 뽑기가 가능합니다!")
                          }
                        />
                      </div>
                    );
                  })}
              </div>

              <div className="w-full flex gap-1 flex-col px-20 py-3 mt-5 mb-4 text-neutral-600">
                <p>더 많은 카드를 보고싶다면?</p> <p> 카드를 만들어 보세요! </p>
              </div>
              <Button
                text={"홈 화면으로 이동"}
                onClick={() => handleNavigate("/")}
              />
            </div>
          </>
        )}

        <div ref={observerRef} className="py-3"></div>
      </div>
    </div>
  );
}
