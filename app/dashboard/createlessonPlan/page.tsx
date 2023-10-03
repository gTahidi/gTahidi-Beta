"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSession } from 'next-auth/react';

interface CustomSession {
    user: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}


const Page = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const { data: session } = useSession() as { data: CustomSession | null };


    const [profile, setProfile] = useState<any>(null);
    const [formData, setFormData] = useState({
        subject: "",
        topic: "",
        substrand: "",
        grade: "",
        minutes: "",
        oid: "",
    });

    useEffect(() => {
        if (session && session.user) {
            setProfile(session.user);
        }
    }, [session]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        console.log('session:', session);

        if (session && session.user && session.user.id) {
            formData.oid = session.user.id;
        }


        console.log('Sending formData:', formData);


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
            } else {
                toast.error("Failed to create lesson plan. Please fill in all inputs.");
            }
        } catch (error) {
            console.error("Error creating lesson plan:", error);
            toast.error("An error occurred. Please try again.");
        }

        setIsLoading(false);
    };


  return (
    <div className="dashboard-container">
      <div className="bg-white shadow-lg p-[2%] max-h-[80vh] rounded-md">
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
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter Strand"
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
          {isLoading && (
            <svg className="animate-spin ml-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-2.647z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
