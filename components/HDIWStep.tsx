import React from "react";

export const HDIWStep = ({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex p-[3%] rounded-md bg-gtahidiLightBlue mb-5 transition-colors step">
      <p className="mr-5 h-max w-max py-1 px-3 rounded-full text-white shadow text-sm transition-colors">
        {step}
      </p>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
