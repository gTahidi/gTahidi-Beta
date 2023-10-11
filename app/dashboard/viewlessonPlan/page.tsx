'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { marked } from "marked";
import axios from "axios";
import { toast } from "react-toastify";
import { useSession } from 'next-auth/react';


interface LessonPlanData {
  _id: string;
  oid: string;
  subject: string;
  topic: string;
  substrand: string;
  grade: string;
  minutes: string;
  content: string;
}

interface CustomSession {
  user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
  };
}

function formatContent(content: string): string {
  let formattedContent = marked(content); 
  formattedContent = formattedContent.replace(/<h1>/g, '<h1 class="text-2xl font-bold my-4">');
  formattedContent = formattedContent.replace(/<h2>/g, '<h2 class="text-xl font-semibold my-3">');
  formattedContent = formattedContent.replace(/<h3>/g, '<h3 class="text-lg font-medium my-2">');
  formattedContent = formattedContent.replace(/<ul>/g, '<ul class="list-disc pl-5">');
  formattedContent = formattedContent.replace(/<ol>/g, '<ol class="list-decimal pl-5">');
  formattedContent = formattedContent.replace(/<li>/g, '<li class="my-1">');
  formattedContent = formattedContent.replace(/<p>/g, '<p class="my-2">');

  return formattedContent;
}

const ViewLesson = () => {
  const router = useRouter() as any;
  const [lessonPlan, setLessonPlan] = useState<LessonPlanData | null>(null);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
      const { data: session } = useSession() as { data: CustomSession | null };




  const handleCreateNotes = () => {
    setLoadingAction('notes'); // Set loading action to 'notes'
    const apiUrl = "https://serverlogic.azurewebsites.net/api/createNotes";
    const requestBody = {
        lessonPlanId: _id,
        oid: session?.user?.id || ""
    };
  
    axios.post(apiUrl, requestBody)
      .then((response) => {
        const createdNotesString = localStorage.getItem('createdNotes');
        let createdNotes: any[]; 
        if (!createdNotesString) {
          createdNotes = [];
        } else {
          createdNotes = JSON.parse(createdNotesString);
        }
        createdNotes.push(response.data);
        localStorage.setItem('createdNotes', JSON.stringify(createdNotes));
    
        toast.success("Notes created successfully!");
        router.push("/dashboard/notes");
        setLoadingAction(null); 

      })
      .catch((error) => {
        console.error("Error creating notes:", error);
        setLoadingAction(null); 
      });
       

  };

  const handleCreateQuiz = () => {
    setLoadingAction('quiz'); // Set loading action to 'quiz'
      const apiUrl = "https://serverlogic.azurewebsites.net/api/createQuizz";

      const requestBody = {
          lessonPlanId: _id,
          oid: session?.user?.id || "" // Attach the oid from the session
          
      }; 

    axios.post(apiUrl, requestBody)
      .then((response) => {
        const createdQuizzesString = localStorage.getItem('createdQuizzes');
        let createdQuizzes: any[]; 
        if (!createdQuizzesString) {
          createdQuizzes = [];
        } else {
          createdQuizzes = JSON.parse(createdQuizzesString);
        }
        createdQuizzes.push(response.data);
        localStorage.setItem('createdQuizzes', JSON.stringify(createdQuizzes));

        toast.success("Quizzes created successfully!");
        router.push("/dashboard/quizzes");
        setLoadingAction(null); 

      })
      .catch((error) => {
        console.error("Error creating quiz:", error);
        setLoadingAction(null); 
      });

    };

  useEffect(() => {
    let lessonPlanId;
    // First, attempt to retrieve from router's query
    if (router.isReady) {
        lessonPlanId = router.query.lessonPlanId as string;
    }

    // If not found in router's query, try local storage
    if (!lessonPlanId) {
        lessonPlanId = localStorage.getItem("selectedLessonPlanId");
    }

    if (lessonPlanId) {
        fetch(`https://serverlogic.azurewebsites.net/api/specificLessonplan?lessonPlanId=${lessonPlanId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched lesson plan data:', data); // This will log the fetched data
                setLessonPlan(data);
            })
            .catch((error) => {
                console.error('Error fetching lesson plan:', error);
            });
    }
}, [router.isReady, router.query]);


return (
  <div className="dashboard-container">
      {lessonPlan ? (
          <div className="lesson-plan-container bg-white shadow-lg rounded-lg p-6 my-4 w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-black">
                <button className="bg-gtahidiPurple p-3 rounded" onClick={handleCreateNotes}>
                  Create Notes
                  {loadingAction === 'notes' && (
                    <svg className="animate-spin ml-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"></path>
                    </svg>
                  )}
                </button>
                <button className="bg-gtahidiPurple p-3 rounded mt-5" onClick={handleCreateQuiz}>
                  Create Quizzes
                  {loadingAction === 'quiz' && (
                    <svg className="animate-spin ml-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            
              <p className=" text-xl font-semibold  leading-relaxed tracking-wide mb-2">
                      Subject: {lessonPlan.subject}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Topic: {lessonPlan.topic}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Substrand: {lessonPlan.substrand}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Grade: {lessonPlan.grade}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Duration in minutes: {lessonPlan.minutes}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2"
                      dangerouslySetInnerHTML={{ __html: formatContent(lessonPlan.content) }}
                    >
                    </p>
          </div>
      ) : (
          <div className="loading-container flex flex-col items-center justify-center h-full">
              <div className="spinner">
                  <span
                      role="img"
                      aria-label="spinner"
                      className="spin-icon"
                  >
                      ⏳
                  </span>
              </div>
              <p className="loading-text mt-4 text-center">
                  Sit tight, the lesson plan details are loading{" "}
                  <span role="img" aria-label="smiley">
                      😊
                  </span>
              </p>
          </div>
      )}
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
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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

export default ViewLesson;
