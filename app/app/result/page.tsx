import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="show flex-grow flex">
        <p>result</p>
        <div className="ml-auto flex flex-col text-white pr-5">
          <button className="bg-gtahidiPurple p-3 rounded mt-5">
            Create Notes
          </button>
          <button className="bg-gtahidiPurple p-3 rounded mt-5">
            Create Quizzes
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default page;
