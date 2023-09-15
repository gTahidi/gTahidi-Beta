'use client'

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const lessonPlanId = "64ffe2b8c107100e95e43731";
    const apiUrl = `https://serverlogic.azurewebsites.net/api/fetchQuizz?lessonPlanId=${lessonPlanId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Quizzes</DashboardPageTitle>
      <DashboardPageButton text="Create New Quiz" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
            <p className="text-gray-600">{quiz.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
