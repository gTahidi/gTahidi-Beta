import Image from "next/image";
import React from "react";
import { Attribution } from "./Attribution";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="p-[5%] bg-gtahidiCream flex justify-around items-end">
      <div className="w-2/12">
        <Image
          src="/logo.png"
          alt="logo"
          width={600}
          height={600}
          className="w-full h-[200px] object-cover"
        />
        <p className="text-sm mt-4 font-semibold">
          Education for a Connected World
        </p>
      </div>
      <div>
        <li>Benefits</li>
        <li>How it works</li>
        <li>Testimonials</li>
        <li>Pricing</li>
      </div>
      <div className="flex gap-x-4">
        <Socials />
      </div>
      <Attribution />
    </footer>
  );
};
