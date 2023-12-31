"use client";

import { UserTab } from "@/components/UserTab";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { LeftNav } from "../../components/LeftNav";
import { signOut, useSession } from "next-auth/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isShowingSmallScreen, setIsShowingSmallScreen] = useState(false);

  const closeSmallScreenMenu = () => {
    setIsShowingSmallScreen(false);
  };

  return (
    <main className="bg-dashboardBackground h-screen w-screen flex overflow-x-hidden">
      <LeftNav className="hidden sm:flex" />
      <AnimatePresence>
        {isShowingSmallScreen && (
          <LeftNav
            className="absolute top-0 left-0 bottom-0 w-[50vw]"
            closeSmallScreenMenu={closeSmallScreenMenu}
          />
        )}
      </AnimatePresence>
      <div className="flex-grow flex flex-col">
        <div className="py-4 px-[5%] flex items-center border-b border-b-gtahidiDarkBlue">
          <div className="block sm:hidden">
            {isShowingSmallScreen ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-black h-5 w-5 block sm:hidden"
                onClick={() => setIsShowingSmallScreen((prev) => !prev)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-black h-5 w-5 block sm:hidden"
                onClick={() => setIsShowingSmallScreen((prev) => !prev)}
              />
            )}
          </div>
          <UserTab />
        </div>
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
