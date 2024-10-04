import React from "react";
import Image from "next/image";

export default function FloatingImage({
  src,
  alt,
  className,
  width = 250,
  height = 50,
}) {
  return (
    <div className={`relative ${className} animate-float`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
}
