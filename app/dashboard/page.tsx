"use client";

import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [subStrand, setSubStrand] = useState("");
  const [grade, setGrade] = useState("");
  const [duration, setDuration] = useState("");

  
  const createLessonPlan = async () => {
    try {
     
      const requestBody = {
        subject: subject,
        topic: topic,
        substrand: subStrand,
        minutes: duration,
        grade: grade,
      };

      
      const response = await axios.post(
        "https://serverlogic.azurewebsites.net/api/createLessonPlan",
        requestBody
      );

      
      if (response.status === 200) {
        toast.success("Lesson plan created successfully!");
        
       
        const objectId = response.data._id;

        
        router.push(`/result?objectId=${objectId}`);
      }
    } catch (error) {
      
      console.error("Error creating lesson plan:", error);
      toast.error("Error creating lesson plan. Please try again later.");
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
      <p className="py-2 mt-2 bg-dashboardPurple text-white p-[2%] text-sm rounded-md">
        Create your well organised lesson plan with just a click of a button.
        Fill in all the necessary fields according to your preference.
      </p>
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
