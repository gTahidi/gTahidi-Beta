import React from "react";

export const PilledButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="py-3 px-8 bg-gtahidiPurple rounded-full text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
