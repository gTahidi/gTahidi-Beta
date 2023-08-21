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
  const { data: session } = useSession();

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
        <UserTab />
        {session?.user && (
          <button
            onClick={() => signOut()}
            className="px-5 py-2 text-white border border-white ml-5"
          >
            sign out
          </button>
        )}
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
