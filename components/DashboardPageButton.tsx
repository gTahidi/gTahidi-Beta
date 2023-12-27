import React from "react";

const DashboardPageButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-white py-3 w-1/2 sm:w-1/6 rounded-full text-gtahidiDarkBlue font-semibold text-sm ml-auto">
      {text}
    </button>
  );
};

export default DashboardPageButton;

