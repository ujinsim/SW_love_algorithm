"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import ImageDropdown from "@/components/ImageDropdown";
import Button from "@/components/Button";
import HorizontalLine from "@/components/HorizontalLine";
import { types } from "@/constants/types";

export default function SignupTypePasswordPage({ onNext }) {
  const [password, setPassword] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [errors, setErrors] = useState({});

  const validatePassword = (pwd) => pwd.length >= 6;

  const handleNext = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!validatePassword(password)) {
      valid = false;
      newErrors.password = "비밀번호는 6자 이상이어야 합니다.";
    }

    if (!instagramId) {
      valid = false;
      newErrors.instagramId = "인스타그램 아이디를 입력하세요.";
    }

    if (!selectedType) {
      valid = false;
      newErrors.selectedType = "유형을 선택하세요.";
    }

    if (valid) {
      onNext({ password, instagramId, selectedType });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleNext} className="flex flex-col gap-4">
      <ImageDropdown
        label="나의 유형"
        options={types}
        selected={selectedType}
        onSelect={setSelectedType}
      />
      {errors.selectedType && (
        <p className="text-sm text-red-500">{errors.selectedType}</p>
      )}

      <HorizontalLine />

      <span className="text-xl text-black pt-3 whitespace-nowrap">
        뽑기 상대를 조회할 때 사용됩니다 🫱
      </span>

      <div className="flex flex-col gap-4">
        <Input
          label="인스타그램 아이디"
          type="text"
          value={instagramId}
          onChange={(e) => setInstagramId(e.target.value)}
          placeholder="@제외 입력"
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

      <Button type="submit" text="다음" />
    </form>
  );
}
