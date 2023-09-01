import React from "react";

export const DashboardPageTableHeader = () => {
  return (
    <div className="flex text-sm font-semibold shadow-md">
      <p className="w-1/4 border-r-2 text-center py-4 flex items-center justify-center">
        <input
          type="checkbox"
          name="all-filter"
          id="all-filter"
          className="mr-2"
        />{" "}
        all
      </p>
      <p className="w-1/4 border-r-2 text-center py-4">Lesson Name</p>
      <p className="w-1/4 border-r-2 text-center py-4">Topic</p>
      <p className="w-1/4 border-r-2 text-center py-4">Subject</p>
      <p className="w-1/4 border-r-2 text-center py-4">Grade</p>
      <p className="w-1/4 border-r-2 text-center py-4">Substrand</p>
    </div>
  );
};
