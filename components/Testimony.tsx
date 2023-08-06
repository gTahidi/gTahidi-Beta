import React from "react";

export const Testimony = ({
  text,
  person,
}: {
  text: string;
  person: string;
}) => {
  return (
    <div className="w-6/12">
      <p>{text}</p>
      <p className="text-sm font-semibold">{person}</p>
    </div>
  );
};
