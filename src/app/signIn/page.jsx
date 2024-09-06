"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/utils/features/signIn";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const [instagramId, setInstagramId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setInstagramIdInStore = useAuthStore((state) => state.setInstagramId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(instagramId, password);
      setInstagramIdInStore(instagramId);
      router.push("/signIn/result");
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-[90%] bg-gradient-to-b from-white  rounded-3xl shadow-xl p-8">
        <div className="text-3xl font-bold text-gray-900 mb-6 text-center">
          결과 조회하기
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={instagramId}
            onChange={(e) => setInstagramId(e.target.value)}
            placeholder="인스타그램 아이디"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            조회
          </button>
        </form>
      </div>
    </div>
  );
}
