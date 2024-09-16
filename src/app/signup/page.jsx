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
  const [isInputComplete, setIsInputComplete] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false); // 필수 항목 오류 메시지 표시 상태
  const router = useRouter();

  // 비밀번호 유효성 검사
  const validatePassword = (pwd) => {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(pwd);
  };

  // 인스타그램 아이디 유효성 검사 (1~30자, 알파벳, 숫자, 밑줄만 허용)
  const validateInstagramId = (id) => {
    const instagramIdRegex = /^[a-zA-Z0-9_]{1,30}$/;
    return instagramIdRegex.test(id);
  };

  // 자기소개 유효성 검사 (20글자 이내)
  const validateIntroduction = (intro) => {
    return intro.length <= 20;
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    // 인스타그램 아이디 유효성 검사
    if (!validateInstagramId(instagramId)) {
      valid = false;
      newErrors.instagramId =
        "인스타그램 아이디는 알파벳, 숫자, 밑줄만 사용하며 1~30자여야 합니다.";
    }

    // 비밀번호 유효성 검사
    if (!validatePassword(password)) {
      valid = false;
      newErrors.password = "비밀번호는 6자 이상 입력해야 합니다.";
    }

    // 자기소개 유효성 검사
    if (!validateIntroduction(introduction)) {
      valid = false;
      newErrors.introduction = "자기소개는 20글자 이내로 작성해주세요.";
    }

    // 개인정보 수집 동의 검사
    if (!consent) {
      valid = false;
      newErrors.consent = "개인정보 수집 동의가 필요합니다.";
    }

    // 필수 입력 항목 체크
    if (!selectedType || !gender || !emoji || !introduction) {
      valid = false;
      newErrors.required = "모든 필수 항목을 입력해야 합니다.";
    }

    if (valid) {
      setIsInputComplete(true);
      setShowErrorMessage(false); // 오류 메시지 숨김
    } else {
      setErrors(newErrors);
      setShowErrorMessage(true); // 오류 메시지 표시
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
    <div className="bg-gradient-to-b from-white via-purple-200 to-pink-300 max-h-max flex items-center justify-center py-10">
      {!isInputComplete ? (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex justify-center items-center bg-gradient-to-b from-white via-purple-100 z-10 text-3xl font-bold text-gray-900 text-center fixed w-full top-0 py-4 bg-white">
            💌 카드 만들기 💌
            <div className="absolute bottom-0 left-0 top-0 w-full shadow-xl" />
          </div>
          <form
            onSubmit={handleInputSubmit}
            className="flex flex-col gap-4 px-10 pt-20 pb-10 w-full max-w-[500px] justify-center"
          >
            <ImageDropdown
              label="유형"
              options={types}
              selected={selectedType}
              onSelect={setSelectedType}
            />
            <div className="flex flex-col gap-4 w-full">
              <Input
                label="인스타그램 아이디"
                type="text"
                value={instagramId}
                onChange={(e) => setInstagramId(e.target.value)}
                placeholder="특수문자 제외 입력"
                error={errors.instagramId}
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
            <div className="flex gap-4 w-full">
              <GenderSelection
                label="성별"
                gender={gender}
                onGenderChange={setGender}
              />
            </div>
            <EmojiSelection selectedEmoji={emoji} setSelectedEmoji={setEmoji} />
            <Input
              label="소개"
              type="text"
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              placeholder="자기소개를 20자 이내로 입력하세요"
              error={errors.introduction}
            />
            <div className="flex items-center gap-2 w-full">
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
            {showErrorMessage && errors.required && (
              <p className="text-sm text-red-600">{errors.required}</p>
            )}
            {errors.consent && (
              <p className="text-sm text-red-600">{errors.consent}</p>
            )}
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 w-full"
            >
              입력 완료
            </button>
          </form>
        </div>
      ) : (
        <Certification onSubmit={handleCertificationSubmit} />
      )}
    </div>
  );
}
