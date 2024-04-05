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
import React, { ElementType, useState } from "react";
import BarChart from "@/components/dashboard/barchart"
import PieChart from "@/components/dashboard/piechart"
import UploadsComponent from "@/components/dashboard/Uploads"
import ProgressCard from "@/components/dashboard/progress"
import Sidebar from "@/components/dashboard/sidebar";
import useMetaPixel from '@/hooks/useMetaPixel';




const Dashboard = () => {
  useMetaPixel('YOUR_PIXEL_ID');

  return (
    <div className="flex-grow dashboard-container bg-[#E8EFF6] w-4/5 h-full flex flex-col overflow-y-auto z-10">

      <div className="p-2">
        <p className="text-gray-500">
          Hello Kechy, Welcome back 👋🏻
        </p>
        <p className="mt-3 text-5xl font-bold">
        Welcome To <span className=" text-gtahidiPink">gTahidi AI</span>        
        </p>
      </div>
      <div     
          className="p-5 rounded-xl  bg-gtahidiDarkBlue flex w-full items-start mb-2 shadow-xl justify-between  text-black transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
          <div className="p-2 flex-grow">
            <h1 className=" text-white text-2xl mb-2 font-semibold">Create Personalized <span className=" text-gtahidiPink">Lesson Plans, Notes And Quizes</span></h1>
            <div className="flex ">
            <p className=" text-white">Create your well organised lesson plan with just a click of   a button. Fill in all the necessary fields according to your preference.</p>
            <button className="bg-white rounded p-3">Get started</button>
            </div>
          </div>
        </div>
        {/* charts */}
        <div className="flex space-x-3 gap-3">
          <BarChart/>
          <div className=" mr-1">
          <PieChart/>
          </div>
        </div>
        <div className="flex space-x-5 gap-6">
        <UploadsComponent/>
        <ProgressCard/>
        </div>
        
    </div>
  );
};

export default Dashboard;
