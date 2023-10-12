'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";

const UploadDataPage = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(true); // Set to true to make it appear on page load
  const router = useRouter();

  const upgrade = () => {
    router.push("/dashboard/pricing");
  };

  const close = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    setShowUpgradeModal(true);
  }, []);

  return (
    <div className=''>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded shadow-lg w-1/3 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Upgrade to Premium</h3>
          <p className="text-gtahidiPurple">
            Get access to advanced features like "Upload Data" and "Chat" by upgrading to our premium plan.
          </p>
          <div className=" space-x-2">
          <button className="mt-4 bg-gtahidiPurple p-3 rounded text-white font-medium" onClick={upgrade}>
            Upgrade
          </button>
          <button className="mt-4 bg-red-500 p-3  rounded text-white font-medium" onClick={close}>
            Close
          </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default UploadDataPage;
