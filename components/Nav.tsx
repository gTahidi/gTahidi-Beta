"use client";

import { useGlobalData } from "@/hooks/useGlobalData";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { PillButton } from "./PillButton";
import { SmallScreenNav } from "./SmallScreenNav";

export const Nav = () => {
  const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false);

  const { handleStart } = useGlobalData();

  const hideSmallScreenMenu = () => setShowSmallScreenMenu(false);

  return (
    <nav className="flex px-[5%] py-[2%]">
      <ul className="sm:ml-auto flex gap-x-4 text-sm items-center w-full sm:w-2/3 justify-between sm:justify-normal">
        <FontAwesomeIcon
          icon={faBars}
          className="h-5 w-5 text-gtahidiPurple hidden"
          onClick={() => setShowSmallScreenMenu(true)}
        />
        <AnimatePresence>
          {showSmallScreenMenu && (
            <SmallScreenNav hideSmallScreenMenu={hideSmallScreenMenu} />
          )}
        </AnimatePresence>
        <div className="sm:flex gap-x-4 hidden w-10/12 justify-between text-gtahidiDarkBlue font-semibold">
          <a href="#benefits" className="cursor-pointer">
            Benefits
          </a>
              <a href="#how-it-works" className="cursor-pointer">
                How it works
              </a>
              <a href="#testimonials" className="cursor-pointer">
                Testimonials
              </a>
              <a className="cursor-pointer" href="#pricing">
                Pricing
              </a>
              <a className="cursor-pointer" href="#contact">
                Contact Us
              </a>
            </div>
            <PillButton
            className="hidden sm:block"
             onClick={handleStart}>Start Creating</PillButton>
          </ul>
    </nav>
  );
};
