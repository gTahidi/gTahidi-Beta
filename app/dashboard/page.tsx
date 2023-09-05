"use client";

import { IMsalContext, MsalAuthenticationTemplate } from "@azure/msal-react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React, { ElementType } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLessonPlanService } from "../../redux/slices/createService";

const Dashboard = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.dashboard.response);
  const [inputData, setInputData] = useState({
    subject: "",
    topic: "",
    subStrand: "",
    grade: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleCreateLessonPlan = () => {
    const requestData = {
      messages: [
        {
          role: "user",
          content: `create a lesson plan on\n'subject':'${inputData.subject}',\n'substrand': '${inputData.subStrand}',\n'topic': '${inputData.topic}',\n'duration': '${inputData.duration}',\n'grade': ${inputData.grade}\n`,
        },
      ],
    };

    dispatch(createLessonPlanService(requestData));
  };

  return (
    <div className="flex-grow dashboard-container">
      <div className="bg-white shadow-lg p-[2%] rounded-md">
        <p className="text-gtahidiDarkBlue font-semibold">
          Welcome to gTahidi AI
        </p>
        <p className="font-semibold">
          Create Personalized Lesson Plans, Notes, and Quizzes With Our Advanced AI
        </p>
      </div>
      <p className="py-2 mt-2 bg-dashboardPurple text-white p-[2%] text-sm rounded-md">
        Create your well-organized lesson plan with just a click of a button.
        Fill in all the necessary fields according to your preference.
      </p>
      <div className="w-3/4 sm:w-1/2 mx-auto mt-10 text-sm">
        <div className="flex gap-x-2">
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={inputData.subject}
            onChange={handleInputChange}
            className="w-1/2 p-3 rounded"
          />
          <input
            type="text"
            name="topic"
            placeholder="Enter Topic"
            value={inputData.topic}
            onChange={handleInputChange}
            className="w-1/2 p-3 rounded"
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            name="subStrand"
            placeholder="Enter Substrand"
            value={inputData.subStrand}
            onChange={handleInputChange}
            className="w-1/2 p-3 rounded"
          />
          <input
            type="text"
            name="grade"
            placeholder="Enter Grade"
            value={inputData.grade}
            onChange={handleInputChange}
            className="w-1/2 p-3 rounded"
          />
        </div>
        <input
          type="text"
          name="duration"
          placeholder="Enter Duration in minutes"
          value={inputData.duration}
          onChange={handleInputChange}
          className="w-full p-3 mt-5"
        />
        <button
          type="submit"
          className="text-center w-full mt-7 bg-gtahidiPink py-3 text-white rounded-full"
          onClick={handleCreateLessonPlan}
        >
          Create Lesson Plan
        </button>
      </div>
      {response && (
        <div>
          {/* Display the API response data here */}
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
