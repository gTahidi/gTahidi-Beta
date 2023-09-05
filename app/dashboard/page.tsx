"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify"; // Import Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS


const Dashboard = () => {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [subStrand, setSubStrand] = useState("");
  const [grade, setGrade] = useState("");
  const [duration, setDuration] = useState("");
  const [content, setContent] = useState(""); 

  const createLessonPlan = async () => {
    // Check if all input fields are filled
    if (!subject || !topic || !subStrand || !grade || !duration) {
      toast.error("Please fill in all input fields."); 
      return;
    }

    try {
      const apiKey = "7052b7dc980e44e3a52ec96cb9bf3792";
      const apiUrl =
        "https://ailogic.openai.azure.com/openai/deployments/gtahidiAI/chat/completions?api-version=2023-03-15-preview";

      const requestBody = {
        messages: [
          {
            role: "user",
            content: `create a lesson plan on\n'subject':'${subject}',\n'substrand':'${subStrand}',\n'topic':'${topic}',\n'duration':'${duration}',\n'grade':${grade}\n`,
          },
        ],
      };

      // Make  request
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey, 
        },
      });

      // Handle the API response as needed
      console.log("API Response:", response.data);
      toast.success("Lesson created successfully.");

      router.push("/dashboard/result");

      // Set the content state with the response content
      setContent(response.data.choices[0].message.content);
    } catch (error) {

      console.error("API Error:", error);
      toast.error("Failed to create the lesson plan."); 
    }
  };

  return (
    <div className="flex-grow dashboard-container">
      <div className="bg-white shadow-lg p-[2%] rounded-md">
        <p className="text-gtahidiDarkBlue font-semibold">
          Welcome to gTahidi AI
        </p>
        <p className="font-semibold">
          Create Personalized Lesson Plans, Notes And Quizzes With Our Advanced
          AI
        </p>
      </div>
      {/* Input fields for parameters */}
      <div className="w-3/4 sm:w-1/2 mx-auto mt-10 text-sm">
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Enter Subject"
            className="w-1/2 p-3 rounded"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Topic"
            className="w-1/2 p-3 rounded"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            placeholder="Enter Sub strand"
            className="w-1/2 p-3 rounded"
            value={subStrand}
            onChange={(e) => setSubStrand(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Grade"
            className="w-1/2 p-3 rounded"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Duration in minutes"
          className="w-full p-3 mt-5"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        {/* Button to create the lesson plan */}
        <button
          type="submit"
          className="text-center w-full mt-7 bg-gtahidiPink py-3 text-white rounded-full"
          onClick={createLessonPlan}
        >
          Create Lesson Plan
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Dashboard;
