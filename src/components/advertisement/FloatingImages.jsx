"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const FloatingImages = () => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsImagesLoaded(true), 1000);
    const arrowTimer = setTimeout(() => setShowArrow(true), 3000); // Arrow appears 2 seconds after images
    return () => {
      clearTimeout(timer);
      clearTimeout(arrowTimer);
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen z-0"></div>

      {isImagesLoaded && (
        <>
          <div
            className="absolute z-10"
            style={{
              top: "30%",
              left: "10%",
              animation: "fadeInUp 1s ease-in-out forwards",
            }}
          >
            <Image
              src="/images/cardex1.png"
              alt="카드 예시 1"
              width={100}
              height={100}
              className=" opacity-40"
              style={{
                transform: "rotate(-15deg)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
          <div
            className="absolute z-10"
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
              className=" opacity-30"
              style={{
                transform: "rotate(-20deg)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
          <div
            className="absolute z-10"
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
              className=" opacity-20"
              style={{
                transform: "rotate(20deg)",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
        </>
      )}

      {/* Foreground Content */}
      <div className="relative z-20 w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center min-h-screen px-3">
          <div className="text-center">
            <span className="bg-white text-black text-sm font-bold px-7 py-2 rounded-full shadow">
              @MJU_SW
            </span>
          </div>

          <div className="mt-6 text-center space-y-4 flex flex-col">
            <div className="bg-white text-black text-4xl shadow-xl font-bold px-6 py-3 rounded-full inline-block">
              자신의 유형을 담은
            </div>
            <div className="bg-pink-400 text-white text-2xl shadow-xl font-bold px-6 py-3 rounded-full inline-block ">
              카드 만들기
            </div>
          </div>

          <div className="mt-4 text-center text-black text-base font-bold">
            나의 정보를 담은 카드를 만들고 <br />
            다른 사람의 카드를{" "}
            <span className="text-pink-500 font-bold">Pick!</span> 하여 ID를
            확인해보세요.
          </div>

          <div className="mt-10 text-center">
            <span className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow">
              2024.10.07 ~ 2024.10.08
            </span>
          </div>

          <div className="mt-10 flex gap-5 justify-between items-center w-full max-w-lg mx-auto bg-white p-2 rounded-2xl shadow-xl">
            <div className="text-center">
              <p className="text-black text-base font-semibold">테스트하기</p>
              <p className="text-black text-sm font-light">
                9가지 질문을 통한 나의 연애 유형 확인
              </p>
            </div>
            <div className="text-center">
              <p className="text-black text-base font-semibold">카드 만들기</p>
              <p className="text-black text-sm font-light">
                테스트 결과 기반으로 나의 카드 만들기
              </p>
            </div>
            <div className="text-center">
              <p className="text-black text-base font-semibold">카드 뽑기</p>
              <p className="text-black text-sm font-light">
                다른 사람 카드 조회하고 뽑아서 id 확인!
              </p>
            </div>
          </div>

          {/* Arrow Icon Appears */}
          {showArrow && (
            <div
              className="mt-10 flex justify-center items-center"
              style={{
                animation: "fadeInArrow 1s ease-in-out forwards",
              }}
            >
              <IoIosArrowDown className="text-pink-500 text-4xl " />
            </div>
          )}
        </div>
      </div>

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

        @keyframes fadeInArrow {
          0% {
            opacity: 0;
            transform: translateY(20px);
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
