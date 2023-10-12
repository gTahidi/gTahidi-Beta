'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ChatPage = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(true);
  const router = useRouter();

  const upgrade = () => {
    router.push("/dashboard/pricing");
  };

  const close = () => {
    router.push("/dashboard");
  };

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 md:p-8 rounded shadow-lg w-full md:w-1/3 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Upgrade to Premium</h3>
          <p className="text-gtahidiPurple">
            Get access to advanced features like Upload Data and Chat by upgrading to our premium plan.
          </p>
          <div className="md:space-x-2 mt-4">
            <button className="bg-gtahidiPurple p-3 rounded text-white font-medium" onClick={upgrade}>
              Upgrade
            </button>
            <button className="bg-red-500 p-3 rounded text-white font-medium" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-[5%] py-5 gap-y-5">
        {/* Your chat content goes here */}
      </div>
    </div>
  );
};

export default ChatPage;
