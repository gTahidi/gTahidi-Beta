import React from "react";

const Result = ({ content }) => {
  return (
    <div className="flex-grow flex p-5">
      <p>result</p>
      
      <div>{content}</div>
      <div className="ml-auto flex flex-col text-white">
        <button className="bg-gtahidiPurple p-3 rounded">Create Notes</button>
        <button className="bg-gtahidiPurple p-3 rounded mt-5">
          Create Quizzes
        </button>
      </div>
    </div>
  );
};

export default Result;
