"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import EmojiSelection from "@/components/EmojiSelection";
import Button from "@/components/Button";

export default function SignupEmojiIntroductionPage({ onNext, onBack }) {
  const [introduction, setIntroduction] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!introduction) {
      valid = false;
      newErrors.introduction = "자기소개를 입력하세요.";
    }

    if (selectedEmoji === null) {
      valid = false;
      newErrors.selectedEmoji = "이모지를 선택하세요.";
    }

    if (!consent) {
      valid = false;
      newErrors.consent = "개인정보 수집 동의가 필요합니다.";
    }

    if (valid) {
      onNext({ introduction, selectedEmoji });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="자기소개"
        type="text"
        value={introduction}
        onChange={(e) => setIntroduction(e.target.value)}
        placeholder="자기소개를 입력하세요"
        error={errors.introduction}
      />

      <EmojiSelection
        selectedEmoji={selectedEmoji}
        setSelectedEmoji={setSelectedEmoji}
      />
      {errors.selectedEmoji && (
        <p className="text-sm text-red-500">{errors.selectedEmoji}</p>
      )}

      <div className="flex items-center gap-2 pb-3">
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
      {errors.consent && (
        <p className="text-sm text-red-500">{errors.consent}</p>
      )}

      <Button type="submit" text="다음" />
    </form>
  );
}
