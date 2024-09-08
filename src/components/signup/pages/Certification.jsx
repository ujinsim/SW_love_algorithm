"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import HorizontalLine from "@/components/HorizontalLine";

export default function Certification({ onSubmit }) {
  const correctAuthCode = process.env.NEXT_PUBLIC_AUTH_CODE;

  const [authCode, setAuthCode] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    if (authCode !== correctAuthCode) {
      valid = false;
      newErrors.authCode = "인증코드가 올바르지 않습니다.";
    }

    if (valid) {
      onSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <header className="text-3xl font-bold text-gray-900 mb-6 drop-shadow-md">
        잠깐 !!
      </header>
      <HorizontalLine />

      <div className="py-7 text-xl text-black">
        <p>
          앞에 정보를
          <span className="text-red-600"> 정확하게</span> 입력하셨나요 ??
        </p>
        <p className="pt-4">
          하셨다면
          <span className="text-blue-500"> 융합소프트웨어학부 부스</span>에
        </p>
        <p>
          방문하여
          <span className="text-blue-500"> 인증코드</span>를 입력받으세요 !
        </p>
        <p className="text-base pt-3 text-gray-600">
          ( 첫 뽑기 1000원 재뽑기 500원 )
        </p>
      </div>

      <Input
        label="융합소프트웨어 인증코드"
        type="text"
        value={authCode}
        onChange={(e) => setAuthCode(e.target.value)}
        placeholder="융합소프트웨어 부스에서 입력받으세요 !"
        error={errors.authCode}
      />

      <Button text="뽑기" onClick={handleSubmit} />
    </div>
  );
}
