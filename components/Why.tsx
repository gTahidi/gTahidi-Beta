import React from "react";
import {
  faClock,
  faDownload,
  faHandHoldingDollar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ReasonTab from "./ReasonTab";

const Why = () => {
  return (
    <section className="flex flex-col p-[5%]" id="benefits">
      <h2 className="mx-auto section-title">Why gTahidi?</h2>
      <div className="w-full flex justify-between">
        <ReasonTab
          icon={faHandHoldingDollar}
          text="It`s Free, STOP buying Lesson Plans and Schemes of Work"
        />
        <ReasonTab icon={faClock} text="Saves You Time (Of Course 👌)" />
        <ReasonTab
          icon={faDownload}
          text="Copy, Edit & Download it, It's Yours 👍"
        />
        <ReasonTab
          icon={faThumbsUp}
          text="Compliant with over 80% of Global Curricula"
        />
      </div>
    </section>
  );
};

export default Why;
