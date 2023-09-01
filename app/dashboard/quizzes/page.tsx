import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React from "react";

export const quizzes = [
  "Maths Algebra Quiz Grade 1",
  "English Nouns Quiz Grade 2",
  "Kiswahili Vitenzi Quiz Grade4",
  "Maths Multiplication Quiz Grade 5",
];

const Page = () => {
  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Quizzes</DashboardPageTitle>
      <DashboardPageButton text="Create New Quiz" />
      <div className="flex flex-wrap sm:flex-nowrap justify-between gap-5">
        {quizzes.map((quiz, i) => (
          <QuizButton quiz={quiz} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
