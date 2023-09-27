'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";  // Changed from 'next/navigation'
import axios from "axios";
import { toast } from "react-toastify";
import ReactMarkdown from 'react-markdown';
import { useSession } from 'next-auth/react';
import { marked } from "marked";



interface CustomSession {
    user: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}


const ResultPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
    const [loadingAction, setLoadingAction] = useState<string | null>(null);
    const { data: session } = useSession() as { data: CustomSession | null };
    const [lessonPlan, setLessonPlan] = useState<LessonPlanType | null>(null);

  interface LessonPlanType {
    subject: string;
    topic: string;
    substrand: string;
    grade: string;
    minutes: string;
    content: string;
    _id: string;
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
  

 

  useEffect(() => {
    const storedPlan = localStorage.getItem('lessonPlan');
    if (storedPlan) {
      const parsedPlan = JSON.parse(storedPlan);
      setLessonPlan(parsedPlan.lessonPlan); 
    }
  }, []);

  if (!lessonPlan) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const { subject, topic, substrand, grade, minutes, content, _id } = lessonPlan;

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
        setLoadingAction(null); // Clear loading action

      })
      .catch((error) => {
        console.error("Error creating notes:", error);
        setLoadingAction(null); // Clear loading action
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
        setLoadingAction(null); // Clear loading action

      })
      .catch((error) => {
        console.error("Error creating quiz:", error);
        setLoadingAction(null); // Clear loading action
      });
      

  };
  

  return (
    <div className="flex-grow flex flex-col p-5">
      <div className="bg-white shadow-lg rounded-lg p-6 my-4 overflow-y-auto h-[80vh] scrollbar-hide">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-3">{subject}</h2>
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
        
        <h3 className="text-lg font-semibold mb-2">{topic}</h3>

        <div className="text-gray-700 mb-5" dangerouslySetInnerHTML={{ __html: formatContent(content) }}></div>


        <div className="mt-auto flex flex-col text-black space-y-5">
          <p>Substrand: {substrand}</p>
          <p>Grade: {grade}</p>
          <p>Minutes: {minutes}</p>
        </div>
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

export default ResultPage;