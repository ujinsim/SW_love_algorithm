"use client";

import React, { useState } from "react";
import GenderSelection from "@/components/signup/GenderSelection";
import Button from "@/components/Button";

export default function SignupGenderTargetPage({ onNext }) {
  const [gender, setGender] = useState("");
  const [targetGender, setTargetGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleNext = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (!gender) {
      valid = false;
      newErrors.gender = "성별을 선택하세요.";
    }

    if (!targetGender) {
      valid = false;
      newErrors.targetGender = "뽑기를 원하는 성별을 선택하세요.";
    }

    if (valid) {
      onNext({ gender, targetGender });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleNext} className="flex flex-col gap-4">
      <div className="flex flex-col px-2 gap-4 pb-4">
        <GenderSelection
          label="성별"
          selectedGender={gender}
          onGenderChange={setGender}
        />
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender}</p>
        )}

        <GenderSelection
          label="뽑기를 원하는 성별"
          selectedGender={targetGender}
          onGenderChange={setTargetGender}
        />
        {errors.targetGender && (
          <p className="text-sm text-red-500">{errors.targetGender}</p>
        )}
      </div>

      <Button type="submit" text="다음" />
    </form>
  );
}
