'use client';

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React, { useEffect, useState } from "react";

// Define the structure of a quiz
interface Quiz {
  questions: string[];
  // Add any other properties related to a quiz here.
}

interface QuizWrapper {
  quiz: Quiz;
}

const Page = () => {
  const [storedQuizzes, setStoredQuizzes] = useState<QuizWrapper[]>([]);

  useEffect(() => {
    const quizzesFromLocalStorage = localStorage.getItem('createdQuizzes');
    if (quizzesFromLocalStorage) {
      setStoredQuizzes(JSON.parse(quizzesFromLocalStorage));
    }
  }, []);

  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Quizzes</DashboardPageTitle>
      <DashboardPageButton text="Create New Quiz" />
      <div className="flex flex-wrap sm:flex-nowrap justify-between gap-5">
        {storedQuizzes.map((quizWrapper, i) => {
          const quiz = quizWrapper.quiz; // Access the inner quiz object
          return (
            <div key={i} className="quiz-container">
              <h3>Quiz {i + 1}</h3> {/* Example title; adjust as needed */}
              {quiz.questions.map((question, qIndex) => (
                <p key={qIndex}>{question}</p>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Page;
