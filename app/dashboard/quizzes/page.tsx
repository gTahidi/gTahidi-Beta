'use client'

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [quizzes, setQuizzes] = useState([]);
  
  useEffect(() => {
    // Define the API URL
    const apiUrl = "https://serverlogic.azurewebsites.net/api/fetchQuizz";

    // Define the request headers
    const headers = {
      lessonPlanId: "64ffe2b8c107100e95e43731",
    };

    // Make a GET request to fetch the quizzes
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        // Set the fetched quizzes in the state
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
      });
  }, []); // Empty dependency array to fetch quizzes once when the component mounts

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
