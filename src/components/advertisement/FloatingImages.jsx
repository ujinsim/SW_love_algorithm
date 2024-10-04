"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FloatingImages = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false); // 이미지가 떠오르는 상태 관리

  // 이미지 떠오르게 하는 애니메이션 효과를 위한 타이머
  useEffect(() => {
    const timer = setTimeout(() => setIsImagesLoaded(true), 1000); // 1초 후에 이미지 떠오르기
    return () => clearTimeout(timer); // 타이머 정리
  }, []);

  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center">
        <Image
          src="/images/card.png"
          alt="카드 메인 이미지"
          width={550}
          height={300}
          className="z-10"
        />

        {/* 카드들이 떠오르는 애니메이션 */}
        {isImagesLoaded && (
          <>
            <div
              className="absolute z-50"
              style={{
                top: "30%",
                left: "10%",
                animation: "fadeInUp 1s ease-in-out forwards",
              }}
            >
              <Image
                src="/images/cardex1.png"
                alt="카드 예시 1"
                width={150}
                height={100}
                className="rounded-lg shadow-lg"
                style={{
                  transform: "rotate(-15deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className="absolute z-50"
              style={{
                top: "40%",
                left: "70%",
                animation: "fadeInUp 1.5s ease-in-out forwards",
              }}
            >
              <Image
                src="/images/cardex2.png"
                alt="카드 예시 2"
                width={150}
                height={100}
                className="rounded-lg shadow-lg"
                style={{
                  transform: "rotate(20deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className="absolute z-50"
              style={{
                top: "60%",
                left: "30%",
                animation: "fadeInUp 2s ease-in-out forwards",
              }}
            >
              <Image
                src="/images/cardex3.png"
                alt="카드 예시 3"
                width={200}
                height={100}
                className="rounded-lg shadow-lg"
                style={{
                  transform: "rotate(20deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* 애니메이션 키프레임 추가 */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingImages;
