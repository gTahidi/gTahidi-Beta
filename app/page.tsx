import { HDIW } from "@/components/HDIW";
import { Nav } from "@/components/Nav";
import { Socials } from "@/components/Socials";
import { Welcome } from "@/components/Welcome";
import Why from "@/components/Why";
import React from "react";

const page = () => {
  return (
    <>
      <Nav />
      <main>
        <Welcome />
        <Socials />
        <Why />
        <div className="bg-gtahidiCream p-[3%]" />
        <HDIW />
      </main>
    </>
  );
};

export default page;
