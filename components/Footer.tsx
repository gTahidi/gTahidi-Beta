import Image from "next/image";
import React from "react";
import { Attribution } from "./Attribution";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="px-[5%] py-[15%] sm:p-[5%] bg-gtahidiCream flex flex-col sm:flex-row justify-around items-center sm:items-end">
      <Attribution />
    </footer>
  );
};
