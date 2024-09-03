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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={instagramId}
        onChange={(e) => setInstagramId(e.target.value)}
        placeholder="Enter Instagram ID"
        className="text-black"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="text-black"
      />
      <button type="submit" className="text-black">
        Sign In
      </button>
    </form>
  );
}
