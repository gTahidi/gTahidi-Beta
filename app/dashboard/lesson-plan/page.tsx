"use client";

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    substrand: "",
    grade: "",
    minutes: "",
  });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://serverlogic.azurewebsites.net/api/createLessonPlan",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );


      if (response.ok) {
        const responseData = await response.json();
        localStorage.setItem('lessonPlan', JSON.stringify(responseData));
        

        
        toast.success("Lesson plan created successfully!");
        router.push('/dashboard/result');
    
        console.log("response", response);

      } else {
        toast.error("Failed to create lesson plan. Please fill in all inputs.");
      }
    } catch (error) {
      console.error("Error creating lesson plan:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Lesson Plans</DashboardPageTitle>
      <DashboardPageButton text="Create New Plan" />
      <DashboardPageTableHeader />
      <div className="w-3/4 sm:w-1/2 mx-auto mt-10 text-sm">
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Enter Subject"
            className="w-1/2 p-3 rounded"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter Topic"
            className="w-1/2 p-3 rounded"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            placeholder="Enter Sub strand"
            className="w-1/2 p-3 rounded"
            name="substrand"
            value={formData.substrand}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter Grade"
            className="w-1/2 p-3 rounded"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Duration in minutes"
          className="w-full p-3 mt-5"
          name="minutes"
          value={formData.minutes}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="text-center w-full mt-7 bg-gtahidiPink py-3 text-white rounded-full"
          onClick={handleSubmit}
        >
          Create Lesson Plan
        </button>
      </div>
    </div>
  );
};

export default Page;
