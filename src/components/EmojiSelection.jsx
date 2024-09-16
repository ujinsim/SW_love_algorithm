import React from "react";

export default function EmojiSelection({ selectedEmoji, setSelectedEmoji }) {
  const emojis = ["🐶", "🦊", "🐰", "🐱", "🐻"];

  return (
    <div className="flex gap-2 flex-col">
      <span className="text-black font-sans">
        나를 대표하는 이모지를 골라주세요 !
      </span>
      <div className="flex w-full gap-4 justify-between">
        {emojis.map((emoji, index) => (
          <button
            key={index}
            className={`border-2 border-transparent shadow-xl rounded-full transition-colors duration-200 ${
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
