"use client";

import { IMsalContext, MsalAuthenticationTemplate } from "@azure/msal-react";
import {
  faBookBible,
  faBookBookmark,
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
  const Schemes= 10;
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
      <div className=" w-full gap-5"> 
        <div className="bg-black p-5 shadow-lg rounded-xl flex justify-start mb-3 items-start text-white cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">

          <FontAwesomeIcon icon={faSpa} className=" p-4  w-14 h-14" />
          <div className="p-4 flex-grow">
            <h1>Generate a Lesson Plan</h1>
            <p>You can generate a plan based on your uploaded data or just from scratch </p>
          </div>
          <div>
            <p className="font-medium text-xl">Lesson Plans: {plans}</p>
          </div>
        </div>
        <div className="bg-white p-5 shadow-xl rounded-xl mb-3 flex items-start justify-between text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">

          <FontAwesomeIcon icon={faPen} className=" p-4 w-14 h-14" />
          <div className="p-5 flex-grow">
            <h1>Generate a Quiz</h1>
            <p>You can generate a quiz based on your lessonPlan or just from scratch </p>
          </div>
          <div>
            <p className="font-medium text-xl">Quizzes:{quizzes}</p>
          </div>          
        </div>
        <div className="p-5 rounded-xl flex mb-3 items-start justify-between shadow-xl bg-white text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">

          <FontAwesomeIcon icon={faBookOpen} className="w-14 h-14" />
          <div className="p-5 flex-grow">
            <h1>Generate Notes</h1>
            <p>You can generate notes based on your lessonPlan or just from scratch </p>
          </div>
          <div>
            <p className="font-medium text-xl">Notes:{notes}</p>
          </div>
         
        </div>
        <div     className="p-5 rounded-xl flex items-start mb-2 shadow-xl justify-between bg-white text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          <FontAwesomeIcon icon={faBookBookmark} className="w-14 h-14" />
          <div className="p-5 flex-grow">
            <h1>Generate Schemes Of Work</h1>
            <p>You can generate Schemes of Work based on your  lessonPlan or just from scratch </p>
          </div>
          <div>
            <p className="font-medium text-xl">Schemes:{Schemes}</p>
          </div>
         
        </div>
      </div>
      {/* <div className="flex-grow gap-3 flex">
        <ResourceDistributionChart /> 
         <TopTutors />
      </div> */}
    </div>
  );
};

export default Dashboard;
