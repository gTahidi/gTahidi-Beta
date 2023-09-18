'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";  // Changed from 'next/navigation'
import axios from "axios";

const ResultPage = () => {
  const router = useRouter();

  const [lessonPlan, setLessonPlan] = useState(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('lessonPlan');
    if (storedPlan) {
      const parsedPlan = JSON.parse(storedPlan);
      setLessonPlan(parsedPlan.lessonPlan);  // Access the nested lessonPlan key
    }
  }, []);

  if (!lessonPlan) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  const { subject, topic, substrand, grade, minutes, content } = lessonPlan;

  const handleCreateNotes = () => {
    const apiUrl = "https://serverlogic.azurewebsites.net/api/createNotes";
    const requestBody = {
      lessonPlanId: "65017336a27f3e2cb4ee83a4",
    };

    axios.post(apiUrl, requestBody)
      .then((response) => {
        let createdNotes = localStorage.getItem('createdNotes');
        if (!createdNotes) {
          createdNotes = [];
        } else {
          createdNotes = JSON.parse(createdNotes);
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
      lessonPlanId: "64fdc074b65c6e8c6613b4f6",
    };

    axios.post(apiUrl, requestBody)
      .then((response) => {
        let createdQuizzes = localStorage.getItem('createdQuizzes');
        if (!createdQuizzes) {
          createdQuizzes = [];
        } else {
          createdQuizzes = JSON.parse(createdQuizzes);
        }
        createdQuizzes.push(response.data);
        localStorage.setItem('createdQuizzes', JSON.stringify(createdQuizzes));

        // Navigate to the dashboard page
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
