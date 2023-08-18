import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const ReasonTab = ({ text, icon }: { text: string; icon: IconProp }) => {
  return (
    <div className="w-1/2 sm:w-1/5 p-5 bg-gtahidiCream rounded-md border sm:border-0 shadow-lg">
      <div className="h-20 w-20 rounded-[50%] relative mx-auto border-gtahidiPink border">
        <FontAwesomeIcon
          icon={icon}
          className="center-absolutely text-gtahidiPink h-7 w-7"
        />
      </div>
      <p className="text-center mt-5">{text}</p>
    </div>
  );
};

export default ReasonTab;
