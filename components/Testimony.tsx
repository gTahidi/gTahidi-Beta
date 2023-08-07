import React from "react";

export const Testimony = ({
  text,
  person,
}: {
  text: string;
  person: string;
}) => {
  return (
    <div className="w-full">
      <p>{text}</p>
      <p className="text-sm font-semibold">{person}</p>
    </div>
  );
};
