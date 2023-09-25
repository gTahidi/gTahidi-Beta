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
import React, { ElementType, useState } from "react";
import { InteractionType } from "@azure/msal-browser";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ResourceDistributionChart } from "@/components/ResourceDistributionChart";
import TopTutors from "@/components/TopTutors";



const Dashboard = () => {
  const router = useRouter();

  
  const plans = 20;
  const notes = 12;
  const Schemes= 10;
  const quizzes = 30;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="flex-grow dashboard-container flex flex-col overflow-y-auto z-10">
      <div className="bg-white shadow-lg p-[2%] rounded-md">
        <p className="text-gtahidiDarkBlue font-semibold">
          Welcome to gTahidi AI
        </p>
        <p className="font-semibold">
          Leading the Revolution in Education with  Artificial Intelligence
        </p>
      </div>
      <p className="py-2 mt-2 bg-dashboardPurple text-white p-[2%] text-sm rounded-md">
        Create your Personalized lesson plan with just a click of a button.
        Fill in the different fields and you are good to go👌.
      </p>
      <div className=" w-full gap-5"> 
        <div 
          className="bg-white hover:bg-gtahidiDarkBlue p-5 shadow-lg rounded-xl flex justify-start mb-3 items-start text-black cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg sm:w-full"
          onClick={handleCardClick}
        >
          <FontAwesomeIcon icon={faSpa} className=" p-4  w-14 h-14" />
          <div className="p-4 flex-grow">
            <h1>Generate a Lesson Plan</h1>
            <p className="hidden md:block">You can generate a plan based on your uploaded data</p>
          </div>
          <div>
            <p className="font-medium text-xl">Lesson Plans: {plans}</p>
          </div>
        </div>

        <div 
          className="bg-white hover:bg-gtahidiDarkBlue p-5 shadow-xl rounded-xl mb-3 flex items-start justify-between text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          onClick={handleCardClick}
          >
          <FontAwesomeIcon icon={faPen} className=" p-4 w-14 h-14" />
          <div className="p-5 flex-grow">
            <h1>Generate a Quiz</h1>
            <p className="hidden md:block">You can generate a quiz based on your lessonPlan</p>
          </div>
          
            <p className="font-medium text-xl">Quizzes:{quizzes}</p>
         
        </div>

        <div 
          className="p-5 rounded-xl  hover:bg-gtahidiDarkBlue flex mb-3 items-start justify-between shadow-xl bg-white text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          onClick={handleCardClick}
          >
          <FontAwesomeIcon icon={faBookOpen} className="p-4 w-14 h-14" />
          <div className="p-5 flex-grow">
            <h1>Generate Notes</h1>
            <p className="hidden md:block">You can generate notes based on your lessonPlan</p>
          </div>
          <div>
            <p className="font-medium text-xl">Notes:{notes}</p>
          </div>
         
        </div>

        <div     
          className="p-5 rounded-xl  hover:bg-gtahidiDarkBlue flex items-start mb-2 shadow-xl justify-between bg-white text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          onClick={handleCardClick}
          >
          <FontAwesomeIcon icon={faBookBookmark} className="p-4 w-14 h-14" />
          <div className="p-5 flex-grow">
            <h1>Generate Schemes Of Work</h1>
            <p className="hidden md:block">You can generate Schemes of Work based on your lessonPlan</p>
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
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl max-w-xs sm:max-w-md md:max-w-lg max-h-full overflow-y-auto">
            {/* <h2 className="text-xl font-bold mb-4">Choose a lesson plan to generate your Quiz</h2> */}
            {/* <div className="flex flex-col space-y-2">
              <button onClick={() => {}} className="flex items-center bg-dashboardPurple p-4 rounded-lg transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer">
                <span className="mr-2">1.</span>
                English_verbs Lesson plan
              </button>
              <button onClick={() => {}} className="flex items-center bg-gray-200 p-4 rounded-lg transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer">
                <span className="mr-2">2.</span>
                Math Lesson plan
              </button>
              <button onClick={() => {}} className="flex items-center bg-gray-200 p-4 rounded-lg transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer">
                <span className="mr-2">3.</span>
                Math Lesson plan
              </button>
              <button onClick={() => {}} className="flex items-center bg-gray-200 p-4 rounded-lg transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer">
                <span className="mr-2">4.</span>
                Math Lesson plan
              </button>
            </div>
            <div className="text-center font-bold my-4">OR</div> */}
            <button onClick={() => router.push('/dashboard/lesson-plan')} className="bg-gray-200 p-4 w-full rounded-lg transition-colors duration-300 hover:bg-gray-300 cursor-pointer text-center">
              Generate a Lesson Plan first🤗
            </button>
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white p-2 rounded w-full">Close</button>
          </div>
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" onClick={closeModal}></div> */}
        </div>
      )}





    </div>
  );
};

export default Dashboard;
