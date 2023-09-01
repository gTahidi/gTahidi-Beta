import React from "react";

export const DashboardPageTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <h1 className="text-gtahidiPink font-semibold">{children}</h1>;
};
