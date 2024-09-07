import React, { useState } from "react";

export default function EmojiSelection({ selectedEmoji, setSelectedEmoji }) {
  const emojis = ["🐶", "🦊", "🐰", "🐱", "🐻"];

  return (
    <div className="flex gap-2 flex-col">
      <span>나를 대표하는 이모지를 골라주세요 !</span>
      <div className="flex w-full gap-2 justify-between">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className={`border-2 border-transparent shadow-xl bg-transparent  rounded-full hover:bg-slate-100 transition-colors duration-200 ${
              selectedEmoji === index ? "bg-slate-100" : ""
            }`}
            style={{
              flex: "1",
              fontSize: "5vw",
            }}
            onClick={() => setSelectedEmoji(index)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
