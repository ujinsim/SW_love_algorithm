import React from "react";
import MainButton from "@/components/MainButton";

export default function SideButtons() {
  return (
    <div className="flex w-full">
      <div className="flex mt-2 w-full gap-2">
        <MainButton
          title={"카드 달기"}
          text={"융소 부스에서 메모를 달고 <br/> 메모를 조회할 수 있어요 !"}
          variant="secondary"
          onClick="/signup"
          emoji={"💌"}
        />
        <MainButton
          title={"카드 조회 & 뽑기"}
          text={" 다른 사람의 메모를 뽑고<br/> 아이디를 확인할 수 있어요!"}
          variant="first"
          onClick="/signIn/result"
          emoji={"🎁"}
        />
      </div>
    </div>
  );
}
