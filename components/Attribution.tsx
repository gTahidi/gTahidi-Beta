"use client";

import React from "react";
import Image from "next/image";

export const Attribution = () => {
  return (
    <div className="flex items-end text-sm italic">
      <a href="https://www.webtechafrica.com/">
        Website built by WebTech Africa
      </a>
      <Image
        src="/webtechafrica.png"
        alt="webtechafrica logo"
        width={600}
        height={600}
        className="w-10 h-10 object cover rounded-full ml-2 cursor-pointer"
        onClick={() => window.open("https://www.webtechafrica.com/", "_blank")}
      />
    </div>
  );
};
