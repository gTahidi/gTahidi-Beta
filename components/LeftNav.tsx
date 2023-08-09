import { faPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

export const LeftNav = ({ className }: { className: string }) => {
  const isBrowser = typeof window !== "undefined"; // added this to Check if running in the browser environment

  let isSmallScreen = false;
  if (isBrowser) {
    isSmallScreen = window.innerWidth < 640;
  }

  return (
    <motion.div
      className={`bg-black w-1/5 text-white flex flex-col justify-between text-sm px-2 ${className}`}
      initial={isSmallScreen ? { x: -1000 } : undefined}
      animate={isSmallScreen ? { x: 0 } : undefined}
      exit={isSmallScreen ? { x: -1000 } : undefined}
      transition={isSmallScreen ? { duration: 0.5, type: "tween" } : undefined}
    >
      <div className="flex items-center border-white py-4 px-2 rounded cursor-pointer border-2">
        <FontAwesomeIcon icon={faPlus} className="w-5 h-5 mr-3" />
        <p>New Lesson Plan</p>
      </div>
      <div className="flex items-center border-white py-3 px-2 mb-2 rounded cursor-pointer border-2 w-full sm:w-1/2 ml-auto">
        <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5 mr-3" />
        <p>Log out</p>
      </div>
    </motion.div>
  );
};
