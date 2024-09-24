import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import { types } from "@/constants/types";

export default function TypeCarousel() {
  return (
    <div className="w-full overflow-hidden pt-6">
      <div className="flex animate-slide">
        {types.map((item, index) => (
          <button
            key={index}
            className="flex items-center justify-center border-2 rounded-xl pl-1 pr-2 text-center h-12 w-auto min-w-[120px] border-purple-200 gap-2 hover:bg-purple-50"
          >
            <Image
              src={item.type.src}
              width={item.type.width}
              height={item.type.height || 40} // Provide height if not specified
              alt={item.type.label || "type image"} // Add an alt attribute for accessibility
              className="px-2"
            />
            <div className="text-stone-500 text-sm font-sans whitespace-nowrap text-center">
              {item.type.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
