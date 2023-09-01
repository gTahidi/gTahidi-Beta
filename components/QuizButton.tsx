import React from "react";

export const QuizButton = ({ quiz }: { quiz: string }) => {
  return (
    <div className="w-[45%] sm:w-1/4 bg-white shadow-md p-5 cursor-pointer rounded text-center">
      <p>{quiz}</p>
      <p className="text-6xl text-gtahidiPink font-bold">
        {quiz.substring(0, 1)}
      </p>
    </div>
  );
};
