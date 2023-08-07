"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { SmallScreenNav } from "./SmallScreenNav";

export const Nav = () => {
  const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false);

  const hideSmallScreenMenu = () => setShowSmallScreenMenu(false);

  return (
    <nav className="flex px-[5%] py-[2%] bg-gtahidiCream sticky top-0 right-0 left-0 z-50">
      <ul className="sm:ml-auto flex gap-x-4 text-sm items-center w-full sm:w-max justify-between sm:justify-normal">
        <FontAwesomeIcon
          icon={faBars}
          className="h-5 w-5 text-gtahidiPurple block sm:hidden"
          onClick={() => setShowSmallScreenMenu(true)}
        />
        <AnimatePresence>
          {showSmallScreenMenu && (
            <SmallScreenNav hideSmallScreenMenu={hideSmallScreenMenu} />
          )}
        </AnimatePresence>
        <div className="sm:flex gap-x-4 hidden">
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
        </div>
        <button className="bg-gtahidiPurple p-3 rounded text-white font-medium">
          Start Creating
        </button>
      </ul>
    </nav>
  );
};
