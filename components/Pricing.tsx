'use client'

import React from "react";
import { SectionTitle } from "./SectionTitle";

interface PlanProps {
  plan: string;
  offers: string[];
  price: string;
}

export const Pricing: React.FC = () => {
  return (
    <section className="bg-gray-50 px-[5%] py-[15%] sm:p-[5%] flex flex-col items-center" id="pricing">
      <SectionTitle inPink="plans" text="Pricing" />
      <div className="flex justify-around flex-wrap w-full max-w-screen-lg mt-12">
        <PlanComponent
          plan="Starter"
          offers={["Lesson Plans", "Assessment Questions"]}
          price="Free"
        />
        <PlanComponent
          plan="Pro"
          offers={[
            "Lesson Plans",
            "Assessment Questions",
            "Schemes Of Work",
            "Lesson Notes",
          ]}
          price="$50 pm"
        />
      </div>
    </section>
  );
};

const PurchaseButton: React.FC<{ plan: string }> = ({ plan }) => (
  <button 
    className="mt-5 px-8 py-2 rounded-full bg-gtahidiPurple text-white hover:bg-gtahidiPink focus:outline-none focus:ring-2 focus:ring-gtahidiPurple focus:ring-opacity-50 transition-colors"
    // onClick={() => window.location.href="/pricing"}
  >
    Purchase {plan}
  </button>
);

const PlanComponent: React.FC<PlanProps> = ({ plan, offers, price }) => (
  <div className="p-6 bg-white shadow-md rounded-lg w-64 m-4 flex flex-col items-center space-y-4">
    <h3 className="text-2xl font-bold">{plan}</h3>
    <div className="space-y-2">
      {offers.map((offer, idx) => (
        <div key={idx} className="flex items-center">
          <span className="mr-2 text-green-500">&#10003;</span>
          {offer}
        </div>
      ))}
    </div>
    <span className="font-semibold text-lg">{price}</span>
    <PurchaseButton plan={plan} />
  </div>
);
