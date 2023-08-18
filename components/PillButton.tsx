import React from "react";

export const PillButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="bg-gtahidiPurple p-3 rounded text-white font-medium"
      onClick={onClick}
    >
      Start Creating
    </button>
  );
};
