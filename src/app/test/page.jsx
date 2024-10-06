"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const questions = [
  {
    id: 1,
    question: "나는 만약,,연인과 다투고 나면?!",
    options: [
      {
        label: "지금 당장 바로 풀어야지.<br/>지체될수록 오해만 생겨",
        value: "A",
      },
      {
        label: "나는 서로의 입장에 대해<br/>생각할 시간이 필요해!",
        value: "B",
      },
    ],
  },
  {
    id: 2,
    question:
      "데이트하러 연인과 만났는데,<br/>연인의 치아에 고춧가루를<br/>발견한 상황이라면?!",
    options: [
      {
        label:
          "ㅋㅋ 귀여우니까 발견할 때까지<br/>말 안 해주고 혼자 피식피식거리기",
        value: "A",
      },
      { label: "나중에 다른 사람이 보기 전에<br/>당장 말해주기", value: "B" },
    ],
  },
  {
    id: 3,
    question: "만약,, 내가 연인의 방구 소리를 들으면?!",
    options: [
      { label: "뿡! 나도 뀐다.<br/>(나도 튼다)", value: "A" },
      { label: "미미미누톤으로 넘어갈게요~", value: "B" },
    ],
  },
  {
    id: 4,
    question: "만약,, 내가 연인의<br/>전 애인을 만난다면?!(속마음)",
    options: [
      { label: "야이 XX야 !!!!! 😡<br/>(폭군 도마뱀 모드)", value: "A" },
      { label: "? 어쩌라고 허허<br/>(현재가 중요하지~)", value: "B" },
    ],
  },
  {
    id: 5,
    question:
      "연인과 자취방에 있던 상황!<br/>부모님이 비밀번호를 누르고 마는데...",
    options: [
      {
        label:
          "엄마 소개할게.<br/>그때 말했던 00이야!<br/>하고 소개해 드리기 (위기를 기회로 ><)",
        value: "A",
      },
      {
        label:
          "일단 숨어. 자기야 ㅠㅠ<br/>잠깐 저기 좀 들어가 있어<br/>하고 옷장에 넣어버리기",
        value: "B",
      },
    ],
  },
  {
    id: 6,
    question:
      "일주일 중 유일한 공강인 금요일!<br/>자기야~ 우리 심심하니까 홍대 가서 놀랭??",
    options: [
      { label: "갑자기,,?<br/>오늘은 집에서 쉬고싶은데 ..", value: "A" },
      {
        label: "그래! 일주일에서 유일하게 쉬는 날인데<br/>나가 놀아야지~~",
        value: "B",
      },
    ],
  },
  {
    id: 7,
    question: "애인이 ‘수강신청이 망했어…’<br/>라고 했을 때 당신의 반응은?!",
    options: [
      { label: "지금 몇 학점인데?", value: "A" },
      { label: "…어떡해..<br/>기분 괜찮아?", value: "B" },
    ],
  },
  {
    id: 8,
    question:
      "당신은 연인과의<br/>1주년 기념일을 잊어버린 상황이다.<br/>당신의 대처 방안은?!",
    options: [
      {
        label:
          "와, 큰일이다!<br/>바로 서프라이즈 선물 사고,<br/>레스토랑 예약해야지! ",
        value: "A",
      },
      {
        label: "아... 어떻게 하지?<br/>미안하다고 진심을 전해야겠다! ㅠㅠ",
        value: "B",
      },
    ],
  },
  {
    id: 9,
    question:
      "상어가 있는 바다에 빠진 사람들 중<br/>한 사람만을 구할 수 있다.<br/>당신의 선택은?!<br/>(당신은 100% 안전하다)",
    options: [
      { label: "10년지기 절친", value: "A" },
      { label: "1년 만난 애인", value: "B" },
    ],
  },
];

export default function Page() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: value,
    }));

    setSelectedOption(value);

    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        const firstLetter = getLetter(1, 3);
        const middleLetter = getLetter(4, 6);
        const lastLetter = getLetter(7, 9);
        const finalCode = `${firstLetter}${middleLetter}${lastLetter}`;

        router.push(`test/${finalCode}`);
      }
    }, 300);
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
  const imagePath = `/images/test/test${question.id}.png`;

  return (
    <div className="bg-gradient-to-b from-white via-pink-300 to-pink-300 min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[600px] flex flex-col items-center ">
        <div className="w-[94%] bg-gradient-to-b from-white rounded-2xl h-full px-5 py-5 pt-0">
          <div className="w-full bg-white rounded-full h-2.5 overflow-hidden mb-2">
            <div
              className="bg-pink-400 h-2 transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>

          {/* 질문 텍스트 */}
          <div
            className="text-black text-xl px-2 mb-1 w-full flex justify-center text-center py-2"
            dangerouslySetInnerHTML={{ __html: question.question }}
          />

          <div className="w-full flex justify-center">
            <Image
              src={imagePath}
              alt={`Question ${question.id}`}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* 선택 옵션들 */}
          <div className="flex flex-col pt-3 gap-3 px-2">
            {question.options.map((option) => (
              <button
                key={option.value}
                className={` text-black py-3 px-4 cursor-pointer transition-colors duration-300 border-2 border-black ${
                  selectedOption === option.value
                    ? "bg-pink-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleAnswer(option.value)}
                disabled={!!selectedOption}
                dangerouslySetInnerHTML={{ __html: option.label }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
