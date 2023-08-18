"use client";
import { useGlobalData } from "@/hooks/useGlobalData";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { PilledButton } from "./PilledButton";
import { SmallScreenNav } from "./SmallScreenNav";

export const Nav = () => {
  const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false);
  const { handleStart } = useGlobalData();
  const hideSmallScreenMenu = () => setShowSmallScreenMenu(false);

  return (
    <nav className="px-[5%] py-[2%] items-center">
      <AnimatePresence>
        {showSmallScreenMenu && (
          <SmallScreenNav hideSmallScreenMenu={hideSmallScreenMenu} />
        )}
      </AnimatePresence>
      <FontAwesomeIcon
        icon={faBars}
        className="h-5 w-5 text-gtahidiPurple block sm:hidden"
        onClick={() => setShowSmallScreenMenu(true)}
      />
      <div className="flex items-center w-[50%] ml-auto justify-between text-gtahidiDarkBlue text-base">
        <a
          href="#benefits"
          className="cursor-pointer hover:border-b hover:border-gtahidiDarkBlue transition-all hover:pb-1"
        >
          Benefits
        </a>
        <a
          href="#how-it-works"
          className="cursor-pointer hover:border-b hover:border-gtahidiDarkBlue transition-all hover:pb-1"
        >
          How it works
        </a>
        <a
          href="#testimonials"
          className="cursor-pointer hover:border-b hover:border-gtahidiDarkBlue transition-all hover:pb-1"
        >
          Testimonials
        </a>
        <a
          className="cursor-pointer hover:border-b hover:border-gtahidiDarkBlue transition-all hover:pb-1"
          href="#pricing"
        >
          Pricing
        </a>
        <PilledButton onClick={handleStart}>Start Creating</PilledButton>
      </div>
    </nav>
  );
};
