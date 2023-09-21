'use client'
import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  

interface Quiz {
  questions: string[];
}

interface QuizWrapper {
  quiz: Quiz;
}

const Page = () => {
  const [storedQuizzes, setStoredQuizzes] = useState<QuizWrapper[]>([]);
  const router = useRouter();

  useEffect(() => {
    const quizzesFromLocalStorage = localStorage.getItem('createdQuizzes');
    if (quizzesFromLocalStorage) {
      setStoredQuizzes(JSON.parse(quizzesFromLocalStorage));
    }
  }, []);


  const handleBack = () => {
    router.push("/dashboard/result"); 
  };

  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Quizzes</DashboardPageTitle>
      <button 
        onClick={handleBack}
        className="bg-white py-3 w-1/2 sm:w-1/6 rounded-full text-gtahidiDarkBlue font-semibold text-sm ml-auto">Lesson Plan
      </button>
      <div className="flex flex-col sm:flex-col justify-between gap-5 overflow-y-auto h-[70vh] scrollbar-hide">
        {storedQuizzes.map((quizWrapper, i) => {
          const quiz = quizWrapper.quiz;
          return (
            <div key={i} className="quiz-container bg-white shadow-lg rounded-lg p-6 my-4 w-full">
              <h3 className="text-xl font-semibold mb-2 tracking-wide">Quiz {i + 1}</h3>
              {quiz.questions.map((question, qIndex) => (
                <p key={qIndex} className="text-base leading-relaxed tracking-wide mb-2">{question}</p>
              ))}
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Page;
