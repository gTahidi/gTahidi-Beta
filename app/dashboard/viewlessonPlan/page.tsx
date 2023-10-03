'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface LessonPlanData {
  subject: string;
  topic: string;
  substrand: string;
  grade: string;
  minutes: number;
  // Add more properties as needed
}

const ViewLesson = () => {
  const router = useRouter() as any;
  const [lessonPlan, setLessonPlan] = useState<LessonPlanData | null>(null);

  useEffect(() => {
    // Check if the router is ready before attempting to access query parameters
    if (router.isReady) {
      const lessonPlanId = router.query.lessonPlanId as string | undefined;
      if (lessonPlanId) {
        fetch(
          `https://serverlogic.azurewebsites.net/api/fetchLessonPlan?oid=${lessonPlanId}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setLessonPlan(data);
          })
          .catch((error) => {
            console.error('Error fetching lesson plan:', error);
          });
      }
    }
  }, [router.isReady, router.query]);  // Ensure the effect re-runs when router.isReady or router.query changes

  return (
    <div className="lesson-plan-container">
      {lessonPlan ? (
        <>
          <h1>{lessonPlan.subject}</h1>
          <p>Topic: {lessonPlan.topic}</p>
          <p>Substrand: {lessonPlan.substrand}</p>
          <p>Grade: {lessonPlan.grade}</p>
          <p>Duration in minutes: {lessonPlan.minutes}</p>
          {/* Add more lesson plan details here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewLesson;
