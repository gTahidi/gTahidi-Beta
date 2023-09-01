import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React from "react";

const Page = () => {
  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Lesson Plans</DashboardPageTitle>
      <DashboardPageButton text="Create New Plan" />
      <DashboardPageTableHeader />
    </div>
  );
};

export default Page;
