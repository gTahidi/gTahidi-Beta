import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col px-[5%] py-5 gap-y-5">
      <DashboardPageTitle>Upload Data</DashboardPageTitle>
      <p className="py-2 mt-2 bg-dashboardPurple text-white p-[2%] text-sm rounded-md">
        Upload documents and files in pdf format so that they can be stored in
        our database to create future content for you.
      </p>
      <DashboardPageButton text="Upload Data" />
      <div className="flex text-sm font-semibold shadow-md">
        <p className="w-1/4 border-r-2 text-center py-4">File Name</p>
        <p className="w-1/4 border-r-2 text-center py-4">Subject</p>
        <p className="w-1/4 border-r-2 text-center py-4">Grade</p>
        <p className="w-1/4 border-r-2 text-center py-4">Last Uploaded</p>
      </div>
    </div>
  );
};

export default Page;
