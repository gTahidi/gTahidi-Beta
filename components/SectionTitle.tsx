import React from "react";

export const SectionTitle = ({
  text,
  inPink,
}: {
  text: string;
  inPink: string;
}) => {
  return (
    <h2 className="mx-auto section-title text-gtahidiDarkBlue text-center">
      {text} <span className="text-gtahidiPink">{inPink}</span>
    </h2>
  );
};
