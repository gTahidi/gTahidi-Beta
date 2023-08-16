"use client";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { LeftNav } from "../../components/LeftNav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isShowingSmallScreen, setIsShowingSmallScreen] = useState(false);

  return (
    <main className="bg-gtahidiCream h-screen w-screen flex flex-col">
      <div className="py-4 bg-black flex items-center px-5">
        <div className="block sm:hidden">
          {isShowingSmallScreen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-white h-5 w-5 block sm:hidden"
              onClick={() => setIsShowingSmallScreen((prev) => !prev)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-white h-5 w-5 block sm:hidden"
              onClick={() => setIsShowingSmallScreen((prev) => !prev)}
            />
          )}
        </div>
        <p className="text-white text-center mx-auto">gTahidi Lesson Planner</p>
      </div>
      <div className="flex flex-grow relative">
        <LeftNav className="hidden sm:flex" />
        <AnimatePresence>
          {isShowingSmallScreen && (
            <LeftNav className="absolute top-0 left-0 bottom-0 w-[50vw]" />
          )}
        </AnimatePresence>
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
