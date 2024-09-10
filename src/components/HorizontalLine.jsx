"use client";

import React from "react";

export default function HorizontalLine({
  color = "bg-pink-200",
  height = "h-0.5",
  margin = "my-2",
  shadow = "shadow-md",
}) {
  return (
    <div
      className={`w-full ${height} ${color} ${margin} ${shadow} rounded-lg shadow-lg shadow-pink-400 `}
    />
  );
}
