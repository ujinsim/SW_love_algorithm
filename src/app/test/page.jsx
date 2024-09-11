"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  // 첫 글자 결정 질문
  {
    id: 1,
    question: "나는 만약,,연인과 다투고 나면!!",
    options: [
      {
        label: "지금 당장 바로 풀어야지. 지체될 수록 오해만 생겨",
        value: "A",
      },
      { label: "나는 서로의 입장에 대해 생각할 시간이 필요해!", value: "B" },
    ],
  },
  {
    id: 2,
    question:
      "데이트하러 연인과 만났는데,, 연인 치아에 고춧가루를 발견해버린 상황이라면!?",
    options: [
      {
        label: "ᄏᄏ 귀여우니까 발견할 때 까지 말 안해주고 혼자 피식피식거리기",
        value: "A",
      },
      { label: "나중에 남들이 먼져보기전에 당장; 말해주기", value: "B" },
    ],
  },
  {
    id: 3,
    question: "만약,, 나는 연인의 방구소리를 들으면!!",
    options: [
      { label: "뿡! 나도 뀐다.(나도 튼다)", value: "A" },
      { label: "미미미누톤으로 넘어갈게요~", value: "B" },
    ],
  },
  // 중간 글자 결정 질문
  {
    id: 4,
    question: "만약,, 나는 연인의 전애인을 만나면!!(속마음)",
    options: [
      { label: "야이 !!!!! 😡 (폭군도마뱀)", value: "A" },
      { label: "? 어쩌라고 허허 (현재가 중요하지~)", value: "B" },
    ],
  },
  {
    id: 5,
    question: "연인과 자취방에 있던 상황! 부모님이 비밀번호를 누르고 마는데...",
    options: [
      {
        label:
          " 엄마 소개할게 그때 말했던 00이야 하고 소개시켜주기 (위기를 기회로 ><)",
        value: "A",
      },
      {
        label:
          "일단 숨어. 자기야 ᅲᅲ잠깐 저기좀 들어가 있어 하고 옷장에 넣어버리깅 (회피형)",
        value: "B",
      },
    ],
  },
  {
    id: 6,
    question:
      "때는 일주일에 유일하게 공강날 금요일이다. 자기야!! 우리 심심하니까 홍대가서 놀랭??",
    options: [
      { label: "갑자기,,? 오늘은 집에서 쉬고싶은데 ..", value: "A" },
      {
        label: "그래! 일주일에서 유일하게 쉬는데 나가 놀아야즤~~",
        value: "B",
      },
    ],
  },
  // 마지막 글자 결정 질문
  {
    id: 7,
    question:
      "어제 풀타임 알바끝나구 드디어 쉬는날이다 ᅲᅲ! (쉬고싶은 마음이 1000%이다.) 애인 : 자갸 만나쟈 ᄒᄒᄒᄒ",
    options: [
      { label: "오늘은 각자 집에서 쉴까!!", value: "A" },
      { label: "그래!! 그래야지 ᄒᄒᄒᄒ", value: "B" },
    ],
  },
  {
    id: 8,
    question: "자갸! 우리 데이튜하쟈쟈!!!!",
    options: [
      { label: "어디가눙? 일단 만나서 생각하쟈쟈!", value: "A" },
      {
        label: "하 뭐먹지? 카페는 어디가지? 몇시쯤 귀가할 것 같지?",
        value: "B",
      },
    ],
  },
  {
    id: 9,
    question: "솔직하게 말해보세요.(MBTI)",
    options: [
      { label: "나는 솔직함당!(T)", value: "A" },
      { label: "나는 몽순임당!(F)", value: "B" },
    ],
  },
];

const typeMap = {
  AAA: "파이썬 유형",
  ABA: "자바 유형",
  AAB: "MySQL 유형",
  ABB: "자바스크립트 유형",
  BAA: "어셈블리어 유형",
  BAB: "C++ 유형",
  BBA: "루비 유형",
  BBB: "Go 유형",
};

export default function Page() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: value,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const firstLetter = getLetter(1, 3);
      const middleLetter = getLetter(4, 6);
      const lastLetter = getLetter(7, 9);
      const finalCode = `${firstLetter}${middleLetter}${lastLetter}`;

      router.push(`test/${finalCode}`);
    }
  };

  const getLetter = (start, end) => {
    const answersSubset = Object.keys(answers).filter(
      (key) => key >= start && key <= end
    );
    const counts = { A: 0, B: 0 };
    answersSubset.forEach((id) => {
      counts[answers[id]]++;
    });
    return counts.A >= counts.B ? "A" : "B";
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center">
        <div className="w-[94%] bg-gradient-to-b from-white rounded-3xl h-full px-5 py-5 pt-0">
          <div className="flex w-full justify-center flex-col text-center py-10">
            <div className="text-black text-2xl px-2">{question.question}</div>
            <div className="flex flex-col pt-20 gap-10 px-2">
              {question.options.map((option) => (
                <butto
                  key={option.value}
                  className="bg-slate-50 rounded-full border-2 text-black py-3 px-1 cursor-pointer"
                  onClick={() => handleAnswer(option.value)}
                >
                  {option.label}
                </butto>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
