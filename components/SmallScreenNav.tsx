import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

export const SmallScreenNav = ({
  hideSmallScreenMenu,
}: {
  hideSmallScreenMenu: () => void;
}) => {
  return (
    <motion.div
      className="fixed top-0 left-0 bottom-0 w-[50vw] bg-gtahidiCream px-[5%] py-[2%] z-50 flex flex-col"
      onClick={hideSmallScreenMenu}
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="h-5 w-5 text-purple-700 mt-2"
      />
      <a href="#benefits" className="cursor-pointer mt-[25vh]">
        Benefits
      </a>
      <a href="#how-it-works" className="cursor-pointer mt-4">
        How it works
      </a>
      <a href="#testimonials" className="cursor-pointer mt-4">
        Testimonials
      </a>
      <a href="#pricing" className="cursor-pointer mt-4">
        Pricing
      </a>
    </motion.div>
  );
};
