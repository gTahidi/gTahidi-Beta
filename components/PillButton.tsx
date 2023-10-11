import React from "react";

export const PillButton = ({
  onClick,
  children,
  className = ""  // set a default value as empty string
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string; // Allow optional className prop
}) => {
  return (
    <button
      className={`bg-gtahidiPurple p-3 rounded text-white font-medium ${className}`} // Include className in the button's classes
      onClick={onClick}
    >
      {children}
    </button>
  );
};
