"use client";

import {
  faBook,
  faClipboardQuestion,
  faComments,
  faGauge,
  faPlus,
  faRightFromBracket,
  faSpa,
  faUpload,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { DashboardTab } from "./DashboardTab";

export const dashboardTabs = [
  {
    icon: faGauge,
    name: "Dashboard",
  },
  // {
  //   icon: faUpload,
  //   name: "Upload Data",
  // },
  {
    icon: faSpa,
    name: "Lesson Plan",
  },
  {
    icon: faBook,
    name: "Notes",
  },
  {
    icon: faClipboardQuestion,
    name: "Quizzes",
  },
  {
    icon: faComments,
    name: "Chat",
  },
];

export const LeftNav = ({
  className,
  closeSmallScreenMenu,
}: {
  className: string;
  closeSmallScreenMenu?: () => void;
}) => {
  const isBrowser = typeof window !== "undefined"; // added this to Check if running in the browser environment

  let isSmallScreen = false;
  if (isBrowser) {
    isSmallScreen = window.innerWidth < 640;
  }

  const { data: session } = useSession();

  return (
    <motion.div
      className={`bg-dashboardPurple w-1/5 text-white flex flex-col text-sm px-2 ${className} z-20`}
      initial={isSmallScreen ? { x: -1000 } : undefined}
      animate={isSmallScreen ? { x: 0 } : undefined}
      exit={isSmallScreen ? { x: -1000 } : undefined}
      transition={isSmallScreen ? { duration: 0.5, type: "tween" } : undefined}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="sm:hidden h-5 w-5 ml-auto my-5"
        onClick={closeSmallScreenMenu}
      />
      <div className="flex items-center py-4 px-2 rounded cursor-pointer border-2 mt-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/gtahidi_logo 2.png" alt="" className="w-5 h-5 mr-3" />
        <p className="text-center">Gtahidi AI</p>
      </div>
      {dashboardTabs.map((tab, i) => (
        <DashboardTab icon={tab.icon} name={tab.name} key={i} />
      ))}
      {session?.user && (
        <div
          className="flex items-center border-white py-3 px-2 mb-2 rounded cursor-pointer border-2 w-full mt-auto"
          onClick={() => signOut()}
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5 mr-3" />
          <p>Log out</p>
        </div>
      )}
    </motion.div>
  );
};
