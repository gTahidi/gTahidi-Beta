'use client'

import { useRouter } from 'next/router'; // Import from 'next/router' instead of 'next/navigation'
import { useEffect, useState } from 'react';

const ViewLesson = () => {
    const router = useRouter();
  const { lessonPlanId } = router.query as { lessonPlanId: string | undefined }; // Cast router.query to the correct type

interface LessonPlanData {
    subject: string;
    topic: string;
    substrand: string;
    grade: string;
    minutes: number;
    // Add more properties as needed
}

const [lessonPlan, setLessonPlan] = useState<LessonPlanData | null>(null);

  useEffect(() => {
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
  }, [lessonPlanId]);

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
