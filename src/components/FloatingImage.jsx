// src/components/FloatingImage.jsx
import React from "react";

export default function FloatingImage({ src, alt, className }) {
  return <img src={src} alt={alt} className={`${className} animate-float`} />;
}
