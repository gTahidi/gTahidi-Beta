import React from "react";
import { LeftNav } from "./LeftNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gtahidiCream h-screen w-screen flex flex-col">
      <p className="text-white text-center py-2 bg-black">
        gTahidi Lesson Planner
      </p>
      <div className="flex flex-grow">
        <LeftNav />
        {children}
      </div>
    </main>
  );
};

export default Layout;
