import Image from "next/image";
import React from "react";
import { Attribution } from "./Attribution";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="px-[5%] py-[15%] sm:p-[5%] bg-gtahidiCream flex flex-col sm:flex-row justify-around items-center sm:items-end">
      <div className="sm:w-1/6 w-1/2">
        <Image
          src="/logo.png"
          alt="logo"
          width={600}
          height={600}
          className="w-full h-[200px] object-cover"
        />
        <p className="text-sm mt-4 font-semibold text-center sm:text-left">
          Education for a Connected World
        </p>
      </div>
      <div className="my-10 sm:my-0 flex flex-col gap-y-2 items-center">
        <a href="#benefits" className="cursor-pointer">
          Benefits
        </a>
        <a href="#how-it-works" className="cursor-pointer">
          How it works
        </a>
        <a href="#testimonials" className="cursor-pointer">
          Testimonials
        </a>
        <a href="#pricing" className="cursor-pointer">
          Pricing
        </a>
      </div>
      <div className="flex gap-x-4">
        <Socials />
      </div>
      <Attribution />
    </footer>
  );
};
