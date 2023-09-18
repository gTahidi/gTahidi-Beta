'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";  // 'next/navigation'
import axios from "axios";


type LessonPlanType = {
    subject: string;
    topic: string;
    content: string;
    substrand: string;
    grade: string;
    minutes: string;
   
};


const ResultPage = () => {
    const router = useRouter();

    const [lessonPlan, setLessonPlan] = useState<LessonPlanType | null>(null);


    useEffect(() => {
        const storedPlan = localStorage.getItem('lessonPlan');
        if (storedPlan) {
            const parsedPlan = JSON.parse(storedPlan);
            setLessonPlan(parsedPlan);
        }
    }, []);


    if (!lessonPlan) return <div className="flex justify-center items-center h-screen">Loading...</div>;

    const { subject, topic, substrand, grade, minutes, content } = lessonPlan;

    const handleCreateNotes = () => {
        const apiUrl = "https://serverlogic.azurewebsites.net/api/createNotes";
        const requestBody = {
            lessonPlanId: "65017336a27f3e2cb4ee83a4",
        };
        axios.post(apiUrl, requestBody)
            .then((response) => {
                const createdNotesData = localStorage.getItem('createdNotes');
                const createdNotesArray = createdNotesData ? JSON.parse(createdNotesData) : [];
                createdNotesArray.push(response.data);
                localStorage.setItem('createdNotes', JSON.stringify(createdNotesArray));

                console.log("jephuneh", createdNotesArray);

                // Navigate to the dashboard page
                router.push("/dashboard/notes");
            })
            .catch((error) => {
                console.error("Error creating notes:", error);
            });


        const handleCreateQuiz = () => {
            const apiUrl = "https://serverlogic.azurewebsites.net/api/createQuizz";
            const requestBody = {
                lessonPlanId: "64fdc074b65c6e8c6613b4f6",
            };

            axios.post(apiUrl, requestBody)
                .then((response) => {
                    const createdQuizzesData = localStorage.getItem('createdQuizzes');
                    const createdQuizzesArray = createdQuizzesData ? JSON.parse(createdQuizzesData) : [];
                    createdQuizzesArray.push(response.data);
                    localStorage.setItem('createdQuizzes', JSON.stringify(createdQuizzesArray));

                    // Navigate to the dashboard page
                    router.push("/dashboard/quizzes");
                })
                .catch((error) => {
                    console.error("Error creating quiz:", error);
                });


            return (
                <div className="flex-grow flex flex-col p-5">
                    <h2 className="text-xl font-bold mb-3">{subject}</h2>
                    <h3 className="text-lg font-semibold mb-2">{topic}</h3>
                    <div className="text-gray-700 mb-5">
                        {content.split("\n").map((paragraph: string, index: number) => (
                            <p key={index} className="mb-2">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="mt-auto flex flex-col text-white space-y-5">
                        <p>Substrand: {substrand}</p>
                        <p>Grade: {grade}</p>
                        <p>Minutes: {minutes}</p>
                    </div>
                    <div className="ml-auto top-0 flex flex-col text-white">
                        <button className="bg-gtahidiPurple p-3 rounded" onClick={handleCreateNotes}>
                            Create Notes
                        </button>
                        <button className="bg-gtahidiPurple p-3 rounded mt-5" onClick={handleCreateQuiz}>
                            Create Quizzes
                        </button>
                    </div>
                </div>
            );
        };

        
    }

}

export default ResultPage;