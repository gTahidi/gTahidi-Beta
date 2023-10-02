'use client'
import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import InitialPopup from '@/components/InitialPopup'
import FeedbackForm from '@/components/FeedbackForm'

interface QuizData {
  _id: string;
  oid: string;
  questions: string[];
  __v: number;
}

const Page = () => {
  const [storedQuizzes, setStoredQuizzes] = useState<QuizData[]>([]);
  const [loading, setLoading] = useState(true);  
  const router = useRouter();

  // const [showInitialPopup, setShowInitialPopup] = useState(true);
  // const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // const handleLater = () => {
  //   setShowInitialPopup(false);
  // };

  // const handleNow = () => {
  //   setShowInitialPopup(false);
  //   setShowFeedbackForm(true);
  // };

  // const handleCloseFeedbackForm = () => {
  //   setShowFeedbackForm(false);
  // };

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const oid = session?.user?.id;
        if (!oid) {  
          throw new Error("User ID is not found in session");  
        }  
        const url = `https://serverlogic.azurewebsites.net/api/fetchQuizz/?oid=${oid}`;  
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setStoredQuizzes(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchQuizzes();
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
        {loading ? (
          <div className="loading-container flex flex-col items-center justify-center h-full">
            <div className="spinner">
              <span role="img" aria-label="spinner" className="spin-icon">⏳</span>
            </div>
            <p className="loading-text mt-4 text-center">
              Sit tight, the quizzes are loading <span role="img" aria-label="smiley">😊</span>
            </p>
          </div>
        ) : (
          storedQuizzes.map((quizWrapper, i) => {
            return (
              <div key={i} className="quiz-container bg-white shadow-lg rounded-lg p-6 my-4 w-full">
                <h3 className="text-xl font-semibold mb-2 tracking-wide">Quiz {i + 1}</h3>
                {quizWrapper.questions ? (
                  quizWrapper.questions.map((question, qIndex) => (
                    <p key={qIndex} className="text-base leading-relaxed tracking-wide mb-2">{question}</p>
                  ))
                ) : (
                  <p>No questions available for this quiz.</p>
                )}
              </div>
            )
          })
        )}
        {/* {showInitialPopup && <InitialPopup onLater={handleLater} onNow={handleNow} />}
      {showFeedbackForm && <FeedbackForm onClose={handleCloseFeedbackForm} />} */}
      </div>
      <style jsx>{`
        .loading-container {
          /* Style for the loading container */
        }
        .spinner {
          animation: spin 2s linear infinite;
        }
        .spin-icon {
          /* Style for the spinning icon (text or image) */
        }
        .loading-text {
          /* Style for the loading text */
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
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
