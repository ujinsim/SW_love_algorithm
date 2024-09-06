"use client";

import React, { useState } from "react";
import SignupTypePasswordPage from "@/components/signup/pages/SignupTypePasswordPage";
import SignupGenderTargetPage from "@/components/signup/pages/SignupGenderTargetPage";
import SignupEmojiIntroductionPage from "@/components/signup/pages/SignupEmojiIntroductionPage";
import Certification from "@/components/signup/pages/Certification";
import { useRouter } from "next/navigation";
import { join } from "@/utils/features/auth";

export default function SignupFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    password: "",
    instagramId: "",
    selectedType: null,
    gender: "",
    targetGender: "",
    introduction: "",
    selectedEmoji: null,
  });
  const router = useRouter();

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    const {
      password,
      instagramId,
      selectedType,
      gender,
      targetGender,
      introduction,
      selectedEmoji,
    } = formData;

    const result = await join(
      password,
      instagramId,
      selectedType,
      gender,
      targetGender,
      introduction,
      selectedEmoji
    );
    if (result.success) {
      router.push("/");
    } else {
      alert(`회원가입 중 오류가 발생했습니다: ${result.error}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
      {step != 4 && (
        <div className="w-[90%] max-w-md bg-gradient-to-b from-white rounded-3xl shadow-xl p-8">
          <div className="text-3xl font-bold text-gray-900 mb-6 text-center drop-shadow-md">
            🎁 상대방 뽑기 🎁
          </div>

          <div>
            {step === 1 && <SignupTypePasswordPage onNext={handleNext} />}
            {step === 2 && <SignupGenderTargetPage onNext={handleNext} />}
            {step === 3 && <SignupEmojiIntroductionPage onNext={handleNext} />}
          </div>
        </div>
      )}
      {step === 4 && <Certification onSubmit={handleSubmit} />}
    </div>
  );
}
