import React from "react";
import { Plan } from "./Plan";

export const Pricing = () => {
  return (
    <section className="px-[5%] py-[15%] sm:p-[5%] flex flex-col" id="pricing">
      <h2 className="section-title mx-auto">Pricing</h2>
      <div className="flex justify-around flex-wrap">
        <Plan
          plan="Starter"
          offers={["Lesson Plans", "Assessment Questions"]}
          price="Free"
        />
        <Plan
          plan="Essential"
          offers={["Lesson Plans", "Assessment Questions", "Schemes Of Work"]}
          price="300 bob/month"
        />
        <Plan
          plan="Pro"
          offers={[
            "Lesson Plans",
            "Assessment Questions",
            "Schemes Of Work",
            "Lesson Notes",
          ]}
          price="500 bob/month"
        />
      </div>
    </section>
  );
};
