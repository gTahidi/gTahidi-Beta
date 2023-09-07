"use client";

import { IMsalContext, MsalAuthenticationTemplate } from "@azure/msal-react";
import {
  faBookBible,
  faBookOpen,
  faPen,
  faSpa,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ElementType } from "react";
import { InteractionType } from "@azure/msal-browser";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ResourceDistributionChart } from "@/components/ResourceDistributionChart";
import TopTutors from "@/components/TopTutors";

const Dashboard = () => {
  const plans = 20;
  const notes = 12;
  const quizzes = 30;

  return (
    <div className="flex-grow dashboard-container flex flex-col overflow-y-auto">
      <div className="bg-white shadow-lg p-[2%] rounded-md">
        <p className="text-gtahidiDarkBlue font-semibold">
          Welcome to gTahidi AI
        </p>
        <p className="font-semibold">
          Create Personalized Lesson Plans, Notes And Quizzes With Our Advanced
          AI
        </p>
      </div>
      <p className="py-2 mt-2 bg-dashboardPurple text-white p-[2%] text-sm rounded-md">
        Create your well organised lesson plan with just a click of a button.
        Fill in all the necessary fields according to your preference.
      </p>
      <div className="flex justify-between gap-3 flex-col sm:flex-row">
        <div className="bg-black p-5 rounded-md flex items-start justify-between text-white w-full sm:w-1/3">
          <div>
            <p className="font-semibold text-4xl">{plans}</p>
            <p className="font-medium text-sm">Lesson Plans</p>
          </div>
          <FontAwesomeIcon icon={faSpa} className="w-5 h-5" />
        </div>
        <div className="bg-white p-5 rounded-md flex items-start justify-between text-gtahidiDarkBlue w-full sm:w-1/3">
          <div>
            <p className="font-medium text-4xl">{quizzes}</p>
            <p className="font-medium text-sm">Quizzes</p>
          </div>
          <FontAwesomeIcon icon={faPen} className="w-5 h-5" />
        </div>
        <div className="p-5 rounded-md flex items-start justify-between bg-gtahidiDarkBlue text-black w-full sm:w-1/3">
          <div>
            <p className="font-medium text-4xl">{notes}</p>
            <p className="font-medium text-sm">Notes</p>
          </div>
          <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-grow gap-3 flex">
        <ResourceDistributionChart />
        <TopTutors />
      </div>
    </div>
  );
};

export default Dashboard;
