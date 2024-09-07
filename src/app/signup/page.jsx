"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import ImageDropdown from "@/components/ImageDropdown";
import GenderSelection from "@/components/signup/GenderSelection";
import { types } from "@/constants/types";
import EmojiSelection from "@/components/EmojiSelection";
import Certification from "@/components/signup/pages/Certification";
import { join } from "@/utils/features/auth";

export default function SignupPage() {
  const [password, setPassword] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [gender, setGender] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [emoji, setEmoji] = useState("");
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [isInputComplete, setIsInputComplete] = useState(false); // 입력 완료 상태 관리
  const router = useRouter();

  const validatePassword = (pwd) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(pwd);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!validatePassword(password)) {
      valid = false;
      newErrors.password =
        "비밀번호는 6자 이상, 문자, 숫자, 특수문자를 포함해야 합니다.";
    }

    if (!consent) {
      valid = false;
      newErrors.consent = "개인정보 수집 동의가 필요합니다.";
    }

    if (valid) {
      setIsInputComplete(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleCertificationSubmit = async () => {
    const result = await join(
      password,
      instagramId,
      selectedType,
      gender,
      introduction,
      emoji
    );
    if (result.success) {
      router.push("signIn/result");
    } else {
      alert(`회원가입 중 오류가 발생했습니다: ${result.error}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-[90%] max-w-md bg-gradient-to-b from-white rounded-3xl shadow-xl p-8">
        {!isInputComplete ? (
          <>
            <div className="text-3xl font-bold text-gray-900 mb-6 text-center">
              상대방 뽑기
            </div>
            <form onSubmit={handleInputSubmit} className="flex flex-col gap-4">
              <ImageDropdown
                label="유형"
                options={types}
                selected={selectedType}
                onSelect={setSelectedType}
              />
              <div className="flex gap-4">
                <Input
                  label="인스타그램 아이디"
                  type="text"
                  value={instagramId}
                  onChange={(e) => setInstagramId(e.target.value)}
                  placeholder="@제외 입력"
                />

                <Input
                  label="비밀번호"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6자리 이상"
                  error={errors.password}
                />
              </div>
              <div className="flex gap-4 justify-between px-2">
                <GenderSelection
                  label="성별"
                  gender={gender}
                  onGenderChange={setGender}
                />
              </div>
              <EmojiSelection
                selectedEmoji={emoji}
                setSelectedEmoji={setEmoji}
              />
              <Input
                label="소개"
                type="text"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                placeholder="자기소개를 입력하세요"
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-pink-500"
                />
                <label htmlFor="consent" className="text-gray-900">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>
              {errors.consent && <p className=" text-sm">{errors.consent}</p>}
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                입력 완료
              </button>
            </form>
          </>
        ) : (
          // 입력 완료 후 인증 폼
          <Certification onSubmit={handleCertificationSubmit} />
        )}
      </div>
    </div>
  );
}
