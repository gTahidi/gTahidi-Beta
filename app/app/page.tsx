import { LeftNav } from "@/components/LeftNav";
import { WorkSpace } from "@/components/WorkSpace";
import React from "react";

const page = () => {
  return (
    <main className="bg-gtahidiCream h-screen w-screen flex">
      <LeftNav />
      <WorkSpace />
    </main>
  );
};

export default page;
