import React from "react";
import MainButton from "@/components/MainButton";
import { useAuthStore } from "@/store/authStore";

export default function SideButtons() {
  const instagramId = useAuthStore((state) => state.instagramId);
  return (
    <div className="flex w-full">
      <div className="flex mt-2 w-full gap-2">
        <MainButton
          title={"카드 만들기"}
          text={"융소 부스에서 카드를 달고 <br/> 뽑을 수 있어요 !"}
          variant="secondary"
          onClick="/signup"
          emoji={"💌"}
        />
        <MainButton
          title={"카드 뽑기"}
          text={" 다른 사람의 카드를 뽑고<br/> 아이디를 확인할 수 있어요!"}
          variant="first"
          onClick={instagramId ? "/signIn/result" : "/signIn/guest"}
          emoji={"🎁"}
        />
      </div>
    </div>
  );
}
