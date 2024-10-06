import React from "react";

export default function Button({ type, onClick, text, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 ${className}`}
    >
      {text}
    </button>
  );
}
