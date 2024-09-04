"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const movePage = () => {
    console.log("Navigating to /test");
    router.push("/test");
  };

  return (
    <div className="bg-pink-50 min-h-screen w-full overflow-x-hidden flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center ">
        <div className="w-[90%] bg-white h-full rounded-3xl shadow-xl px-8 py-12">
          <div className="font-sans text-black text-2xl">
            데이트하러 연인과 만났는데,, 연인 치아에 고춧가루를 발견해버린
            상황이라면!?
          </div>
          <div className="flex flex-col text-black w-full justify-between p-12">
            <div>
              A: ㅋㅋ 귀여우니까 발견할 때 까지 말 안해주고 혼자 피식피식거리기
            </div>
            <div> B: 나중에 남들이 먼져보기전에 당장; 말해주기</div>
          </div>
        </div>
      </div>
    </div>
  );
}
