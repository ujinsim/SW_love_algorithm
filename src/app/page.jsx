"use client";
import React from "react";
import MainButton from "@/components/MainButton";
import FloatingImage from "@/components/FloatingImage";
import TitleContent from "@/components/TItleContent";
import { RxTriangleRight } from "react-icons/rx";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-svh w-full overflow-hidden flex items-center justify-center ">
      <div className="w-full max-w-[600px] flex flex-col items-center ">
        <div className="w-[94%] bg-gradient-to-b from-white rounded-3xl h-full shadow-xl px-5 py-5 pt-0">
          <div className="w-full overflow-hidden pt-6">
            <div className="flex animate-slide">
              {[
                {
                  src: "images/Python-logo.svg",
                  label: "Python 유형",
                  width: "50px",
                },
                {
                  src: "images/JS-logo.svg",
                  label: "JavaScript 유형",
                  width: "50px",
                },
                {
                  src: "images/Java-logo.png",
                  label: "Java 유형",
                  width: "40px",
                },
                {
                  src: "images/MySql-logo.svg",
                  label: "MySQL 유형",
                  width: "50px",
                },
                {
                  src: "images/Assembly-logo.svg",
                  label: "Assembly 유형",
                  width: "50px",
                },
                {
                  src: "images/C++-logo.svg",
                  label: "C++ 유형",
                  width: "50px",
                },
                {
                  src: "images/Ruby-logo.svg",
                  label: "Ruby 유형",
                  width: "50px",
                },
                { src: "images/Go-logo.svg", label: "Go 유형", width: "50px" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center border-2 rounded-xl pl-1 pr-2 text-center h-12 w-auto min-w-[120px] border-purple-200 gap-2 hover:bg-purple-50"
                >
                  <img src={item.src} width={item.width} className=" px-2 " />
                  <div className="text-stone-500 text-sm font-sans whitespace-nowrap text-center">
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <button className="flex flex-col rounded-lg items-center w-full mb-4 transition-colors duration-300">
              <FloatingImage
                src="images/mainLogo.png"
                alt="test"
                className="w-4/5 max-w-[250px] h-auto"
              />
              <TitleContent
                title="나의 언어 유형은..? 🤔"
                content="테스트 하러가기"
              />
            </button>

            <div className="text-zinc-100 px-2 font-sans font-bold text-sm flex items-center">
              <RxTriangleRight className="text-base text-zinc-100" />
              뽑기전 테스트를 진행해주세요
            </div>

            <div className="flex w-full">
              <div className="flex mt-2 w-full gap-2">
                <MainButton
                  title={"뽑기"}
                  text={"융소 부스에서 <br/>잘 맞는 사람.. 뽑기 💕"}
                  variant="secondary"
                  onClick="/signup"
                  emoji={"🎁"}
                />
                <MainButton
                  title={"결과 조회하기"}
                  text={"나와 잘 맞는 사람을 <br/>아직 못봤다면? 🙃"}
                  variant="first"
                  onClick="/signIn"
                  emoji={"🙈"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
