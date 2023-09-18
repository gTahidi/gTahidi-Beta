'use client'

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import { QuizButton } from "@/components/QuizButton";
import React, { useEffect, useState } from "react";

// Define the types
type Question = {
    questionText: string; // Adjust as needed
    // ... other properties of a question
};

type Quiz = {
    questions: Question[];
    // ... other properties of a quiz
};

type QuizWrapper = {
    quiz: Quiz;
    // ... other properties of a quizWrapper
};

const Page = () => {
    const [storedQuizzes, setStoredQuizzes] = useState<QuizWrapper[]>([]);

    useEffect(() => {
        const quizzesFromLocalStorage = localStorage.getItem('createdQuizzes');
        if (quizzesFromLocalStorage) {
            setStoredQuizzes(JSON.parse(quizzesFromLocalStorage));
        }
    }, []);

    return (
        <div className="dashboard-container">
            <DashboardPageTitle>Quizzes</DashboardPageTitle>
            <DashboardPageButton text="Create New Quiz" />
            <div className="flex flex-wrap sm:flex-nowrap justify-between gap-5">
                {storedQuizzes.map((quizWrapper, i) => {
                    const quiz = quizWrapper.quiz; // Access the inner quiz object
                    return (
                        <div key={i} className="quiz-container">
                            <h3>Quiz {i + 1}</h3> {/* Example title; adjust as needed */}
                            {quiz.questions.map((questionObj, qIndex) => (
                                <p key={qIndex}>{questionObj.questionText}</p>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Page;
