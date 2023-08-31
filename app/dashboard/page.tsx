"use client";

import { IMsalContext, MsalAuthenticationTemplate } from "@azure/msal-react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ElementType } from "react";
import { InteractionType } from "@azure/msal-browser";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="flex-grow flex flex-col p-[5%]">
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
      <div className="w-3/4 sm:w-1/2 mx-auto mt-10 text-sm">
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Enter Subject"
            className="w-1/2 p-3 rounded"
          />
          <input
            type="text"
            placeholder="Enter Topic"
            className="w-1/2 p-3 rounded"
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            placeholder="Enter Sub strand"
            className="w-1/2 p-3 rounded"
          />
          <input
            type="text"
            placeholder="Enter Grade"
            className="w-1/2 p-3 rounded"
          />
        </div>
        <input
          type="text"
          placeholder="Enter Duration in minutes"
          className="w-full p-3 mt-5"
        />
        <button
          type="submit"
          className="text-center w-full mt-7 bg-gtahidiPink py-3 text-white rounded-full"
          onClick={() => router.push("/dashboard/result")}
        >
          Create Lesson Plan
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
