import React from "react";

export default function EmojiSelection({ selectedEmoji, setSelectedEmoji }) {
  const emojis = ["🐶", "🦊", "🐰", "🐱", "🐻"];

  return (
    <div className="flex gap-2 flex-col">
      <span className="text-black text-base p-2">
        나를 대표하는 이모지를 골라주세요 !
      </span>
      <div className="flex w-full gap-4 justify-between">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className={`border-2 shadow-xl rounded-xl border-transparent transition-colors duration-200 ${
              selectedEmoji === emoji ? "bg-white" : "bg-transparent"
            }`}
            style={{
              flex: "1",
              fontSize: "220%",
            }}
            onClick={() => setSelectedEmoji(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
