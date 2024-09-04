"use client";
import MainButton from "@/components/MainButton";
import FloatingImage from "@/components/FloatingImage";
import TitleContent from "@/components/TItleContent";
import InfoComponent from "@/components/InfoComponent";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-pink-50 min-h-screen w-full overflow-x-hidden flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center ">
        <div className="w-[90%] bg-white h-full rounded-3xl shadow-xl px-8 pb-8">
          <div>
            <Logo />
            <button
              onClick={() => router.push("/test")}
              className="flex flex-col items-center w-full mb-8 shadow-lg rounded-lg bg-white hover:bg-pink-50 transition-colors duration-300 border-pink-100 border-2"
            >
              <FloatingImage
                src="/images/test.png"
                alt="test"
                className="w-3/5 max-w-[160px] h-auto"
              />
              <TitleContent
                title="나의 연애 유형은 ..? 🤔"
                content="테스트 하러가기"
              />
            </button>

            <InfoComponent text="뽑기 전 테스트를 진행해주세요 !" />

            <div className="flex flex-col mt-2 gap-4">
              <MainButton
                title={"나와 잘 맞는 사람은 ?"}
                text={"융소 부스에서 두근두근  .. 뽑기 💕"}
                variant="secondary"
                onClick="/signup"
              />
              <MainButton
                title={"결과 조회하기"}
                text={"나와 잘 맞는 사람을 아직 못봤다면? 🙃"}
                variant="tertiary"
                onClick="/signIn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
