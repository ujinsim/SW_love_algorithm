"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const navigateToRoot = () => {
    router.push("/");
  };

  return (
    <nav className="shadow-2xl p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-black text-base font-bold cursor-pointer"
          onClick={navigateToRoot}
        >
          메인 페이지로 이동
        </div>
        <ul className="flex space-x-6">
          <li
            className="text-black cursor-pointer"
            onClick={navigateToRoot}
          ></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
