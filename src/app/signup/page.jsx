// pages/SignupPage.js
"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { join } from "@/utils/features/join";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [gender, setGender] = useState(false); // false for male, true for female
  const [introduction, setIntroduction] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validatePassword = (pwd) => {
    return pwd.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!validatePassword(password)) {
      valid = false;
      newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    }

    if (password !== confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (valid) {
      const result = await join(password, instagramId, gender, introduction);
      if (result.success) {
        router.push("/");
      } else {
        alert(`회원가입 중 오류가 발생했습니다: ${result.error}`);
      }
    } else {
      setErrors(newErrors);
    }
  };

  console.log(password);

  return (
    <div>
      <div className="text-purple-300">Signup Page</div>
      <form onSubmit={handleSubmit}>
        <Input
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          error={errors.password}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
          error={errors.confirmPassword}
        />

        <Input
          label="인스타그램 아이디"
          type="text"
          value={instagramId}
          onChange={(e) => setInstagramId(e.target.value)}
          placeholder="인스타그램 아이디를 입력하세요"
        />

        <fieldset className="text-black">
          <legend>성별</legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === false}
              onChange={() => setGender(false)}
            />
            남성
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === true}
              onChange={() => setGender(true)}
            />
            여성
          </label>
        </fieldset>

        <Input
          label="소개"
          type="text"
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          placeholder="자기소개를 입력하세요"
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
