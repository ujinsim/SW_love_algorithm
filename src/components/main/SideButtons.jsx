import React from "react";
import MainButton from "@/components/MainButton";

export default function SideButtons() {
  return (
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
  );
}
