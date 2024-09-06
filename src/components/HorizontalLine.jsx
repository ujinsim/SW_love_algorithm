"use client";

import React from "react";

export default function HorizontalLine({
  color = "border-zinc-400",
  thickness = "border-t-1",
  margin = "my-1",
}) {
  return <hr className={` ${thickness} ${color} ${margin} `} />;
}
