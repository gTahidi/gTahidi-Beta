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
    <div className="bg-gtahidiLightBlue rounded-lg p-5 w-1/4">
      <p className="font-semibold">{plan}</p>
      <p className="font-semibold text-sm text-gtahidiPurple my-3">
        {" "}
        <span className="text-2xl">{split[0]}</span>{" "}
        {split.filter((t, i) => i !== 0).join(" ")}
      </p>
      <button className="bg-gtahidiPurple rounded py-2 w-3/4 text-white hover:w-4/5 transition-all">
        get {plan} plan
      </button>
      <div className="mt-5">
        {offers.map((offer, i) => (
          <div className="flex items-center mt-2" key={i}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mr-3"
            />
            <p>{offer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
