"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import Link from "next/link"; 
import { marked } from "marked";



interface LessonPlanData {
  _id: string;
  oid: string;
  subject: string;
  topic: string;
  substrand: string;
  grade: string;
  minutes: string;
  content: string;
}
interface CustomSession {
  user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
  };
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

const Page = () => {
  const [storedLessonPlans, setStoredLessonPlans] = useState<LessonPlanData[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();

  useEffect(() => {
    const fetchLessonPlans = async () => {
      try {
        const oid = session?.user?.id // extracting oid
        if(!oid) {
          throw new Error("User ID is not found");
        }
          const url = `https://serverlogic.azurewebsites.net/api/fetchLessonPlan/?oid=${oid}`; 
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        
       const data = await response.json();
        setStoredLessonPlans(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLessonPlans();
  }, [session]);

  const handleBack = () => {
    router.push("/dashboard/createlessonPlan");
  };

  return (
    <div className="dashboard-container">

      <DashboardPageTitle>Lesson Plans</DashboardPageTitle>
      <button
        onClick={handleBack}
        className="bg-white py-3 w-1/2 sm:w-1/6 rounded-full text-gtahidiDarkBlue font-semibold text-sm ml-auto"
      >
        Create a new Plan
      </button>
      <div className="flex flex-col sm:flex-col justify-between gap-5 overflow-y-auto h-[70vh] scrollbar-hide">
        {loading ? (
          <div className="loading-container flex flex-col items-center justify-center h-full">
            <div className="spinner">
              <span
                role="img"
                aria-label="spinner"
                className="spin-icon"
              >
                ⏳
              </span>
            </div>
            <p className="loading-text mt-4 text-center">
              Sit tight, the lesson plans are loading{" "}
              <span role="img" aria-label="smiley">
                😊
              </span>
            </p>
          </div>
        ) : (
          storedLessonPlans.map((lessonPlan, i) => {
            return (
              <div
                key={i}
                className="lesson-plan-container bg-white shadow-lg rounded-lg p-6 my-4 w-full"
              >
                {/* <Link
                  href={`/dashboard/viewlessonPlan?lessonPlanId=${lessonPlan._id}`}
                > */}
                    <p className=" text-xl font-semibold  leading-relaxed tracking-wide mb-2">
                      Subject: {lessonPlan.subject}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Topic: {lessonPlan.topic}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Substrand: {lessonPlan.substrand}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Grade: {lessonPlan.grade}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2">
                      Duration in minutes: {lessonPlan.minutes}
                    </p>
                    <p className="text-base leading-relaxed tracking-wide mb-2"
                      dangerouslySetInnerHTML={{ __html: formatContent(lessonPlan.content) }}
                    >
                      {/* content:{lessonPlan.content} */}
                    </p>

                    {/* <div className="text-gray-700 mb-5" dangerouslySetInnerHTML={{ __html: formatContent(content) }}></div> */}

                  
                {/* </Link> */}
              </div>
            );
          })
        )}

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
            placeholder="Learning Area"
            className="w-1/2 p-3 rounded"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Strand"
            className="w-1/2 p-3 rounded"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            placeholder="Sub strand"
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
      <style jsx>{`
        .loading-container {
          /* Style for the loading container */
        }
        .spinner {
          animation: spin 2s linear infinite;
        }
        .spin-icon {
          /* Style for the spinning icon (text or image) */
        }
        .loading-text {
          /* Style for the loading text */
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
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

export default Page;
