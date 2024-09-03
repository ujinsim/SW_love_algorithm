"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { join } from "@/utils/features/auth";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [password, setPassword] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [gender, setGender] = useState(false);
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

  return (
    <div className="bg-pink-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-3xl font-bold text-gray-900 mb-6 text-center">
          회원가입
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="인스타그램 아이디"
            type="text"
            value={instagramId}
            onChange={(e) => setInstagramId(e.target.value)}
            placeholder="인스타그램 아이디를 입력하세요"
          />

          <Input
            label="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            error={errors.password}
          />

          <fieldset className="text-gray-900">
            <legend className="text-lg font-semibold mb-2">성별</legend>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === false}
                  onChange={() => setGender(false)}
                  className="form-radio"
                />
                남자
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === true}
                  onChange={() => setGender(true)}
                  className="form-radio"
                />
                여자
              </label>
            </div>
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
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
