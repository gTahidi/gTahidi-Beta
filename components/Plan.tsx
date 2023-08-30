import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Plan = ({
  plan,
  price,
  offers,
}: {
  plan: string;
  price: string;
  offers: string[];
}) => {
  const split = price.split(" ");
  return (
    <div className="bg-gtahidiGrey rounded-lg shadow-md p-5 w-full mb-5 sm:mb-0 sm:w-1/4">
      <p className="font-semibold text-center pb-2 border-b border-black">
        {plan}
      </p>
      <p className="font-semibold text-sm text-gtahidiPink my-3 text-center">
        {" "}
        <span className="text-2xl">{split[0]}</span>{" "}
        {split.filter((t, i) => i !== 0).join(" ")}
      </p>
      <div className="mt-5">
        {offers.map((offer, i) => (
          <div className="flex items-center mt-2" key={i}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-gtahidiPink mr-3"
            />
            <p>{offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
