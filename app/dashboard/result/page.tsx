'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";  // Changed from 'next/navigation'
import axios from "axios";

const ResultPage = () => {
  const router = useRouter();

  interface LessonPlanType {
    subject: string;
    topic: string;
    substrand: string;
    grade: string;
    minutes: string;
    content: string;
    _id: string;
  }
  

  const [lessonPlan, setLessonPlan] = useState<LessonPlanType | null>(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('lessonPlan');
    if (storedPlan) {
      const parsedPlan = JSON.parse(storedPlan);
      setLessonPlan(parsedPlan.lessonPlan);  // Access the nested lessonPlan key
    }
  }, []);

  if (!lessonPlan) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const { subject, topic, substrand, grade, minutes, content, _id } = lessonPlan;

  const handleCreateNotes = () => {
    const apiUrl = "https://serverlogic.azurewebsites.net/api/createNotes";
    const requestBody = {
      lessonPlanId: _id,
    };
  
    axios.post(apiUrl, requestBody)
      .then((response) => {
        const createdNotesString = localStorage.getItem('createdNotes');
        let createdNotes: any[]; // We specify the type here as an array
        if (!createdNotesString) {
          createdNotes = [];
        } else {
          createdNotes = JSON.parse(createdNotesString);
        }
        createdNotes.push(response.data);
        localStorage.setItem('createdNotes', JSON.stringify(createdNotes));
  
        console.log("jephuneh", createdNotes);
  
        // Navigate to the dashboard page
        router.push("/dashboard/notes");
      })
      .catch((error) => {
        console.error("Error creating notes:", error);
      });
  };
  

  const handleCreateQuiz = () => {
    const apiUrl = "https://serverlogic.azurewebsites.net/api/createQuizz";
    const requestBody = {
      lessonPlanId: _id,
    };
  
    axios.post(apiUrl, requestBody)
      .then((response) => {
        const createdQuizzesString = localStorage.getItem('createdQuizzes');
        let createdQuizzes: any[]; // We specify the type here as an array
        if (!createdQuizzesString) {
          createdQuizzes = [];
        } else {
          createdQuizzes = JSON.parse(createdQuizzesString);
        }
        createdQuizzes.push(response.data);
        localStorage.setItem('createdQuizzes', JSON.stringify(createdQuizzes));
  
        // Navigate to the dashboard pagez
        router.push("/dashboard/quizzes");
      })
      .catch((error) => {
        console.error("Error creating quiz:", error);
      });
  };
  

  return (
    <div className="flex-grow flex flex-col p-5">
      <h2 className="text-xl font-bold mb-3">{subject}</h2>
      <h3 className="text-lg font-semibold mb-2">{topic}</h3>
      <div className="text-gray-700 mb-5">
        {content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-auto flex flex-col text-white space-y-5">
        <p>Substrand: {substrand}</p>
        <p>Grade: {grade}</p>
        <p>Minutes: {minutes}</p>
      </div>
      <div className="ml-auto top-0 flex flex-col text-white">
        <button className="bg-gtahidiPurple p-3 rounded" onClick={handleCreateNotes}>
          Create Notes
        </button>
        <button className="bg-gtahidiPurple p-3 rounded mt-5" onClick={handleCreateQuiz}>
          Create Quizzes
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
