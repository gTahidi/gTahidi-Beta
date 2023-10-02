"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import Link from "next/link"; 


interface LessonPlanData {
  _id: string;
  oid: string;
  subject: string;
  topic: string;
  substrand: string;
  grade: string;
  minutes: string;
}

const Page = () => {
  const [storedLessonPlans, setStoredLessonPlans] = useState<LessonPlanData[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchLessonPlans = async () => {
      try {
        const response = await fetch(
          "https://serverlogic.azurewebsites.net/api/fetchLessonPlan?oid=fe2ec27d-8113-4a62-8f0d-d5b7c757b0dd"
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok " + response.statusText
          );
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
  }, []);

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
                <Link
                  href={`/dashboard/viewlessonsPlan?lessonPlanId=${lessonPlan._id}`}
                >
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
                  
                </Link>
              </div>
            );
          })
        )}
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
