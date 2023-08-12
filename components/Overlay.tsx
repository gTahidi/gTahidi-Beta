import { motion } from "framer-motion";
import React from "react";

export const Overlay = ({
  children,
  close,
}: {
  children: React.ReactNode;
  close?: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      onClick={close}
    >
      {children}
    </motion.div>
  );
};
