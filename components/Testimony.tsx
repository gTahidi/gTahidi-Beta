import { faQuoteRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Testimony = ({
  text,
  person,
  position,
}: {
  text: string;
  person: string;
  position: string;
}) => {
  return (
    <div className="w-full sm:w-1/2 shadow p-[5%] rounded-2xl border border-black flex flex-col text-center">
      <div className="mx-auto outline outline-gtahidiPink rounded-full aspect-square w-10 h-10 relative">
        <FontAwesomeIcon icon={faUser} className="h-5 w-5 center-absolutely" />
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="h-3 w-4 absolute bottom-0 right-0 translate-x-full text-white bg-gtahidiPink rounded-full"
        />
      </div>
      <p className="my-[10%]">{text}</p>
      <p className="text-sm font-semibold mt-[5%] text-gtahidiDarkBlue">
        {person}
      </p>
      <p className="text-sm font-semibold">{position}</p>
    </div>
  );
};
