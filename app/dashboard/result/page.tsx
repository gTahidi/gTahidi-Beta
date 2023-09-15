"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import LessonPlanComponent from '@/components/LessonPlan';

type LessonPlanData = {
    lessonPlan: {
        subject: string;
        topic: string;
        grade: number;
        content: string;
        _id: string;
        __v: number;
    };
} | null;

const ResultPage = () => {
    const router = useRouter() as any;

    const [data, setData] = useState<LessonPlanData>(null);

    useEffect(() => {
        if (router.query && typeof router.query.data === 'string') {
            setData(JSON.parse(decodeURIComponent(router.query.data)));
        }
    }, [router.query]);

    return (
        <div className="flex-grow flex p-5">
            <LessonPlanComponent data={data} />

            {/* If you have additional components or elements to render, place them here */}
            <div className="ml-auto flex flex-col text-white">
                <button className="bg-gtahidiPurple p-3 rounded">Create Notes</button>
                <button className="bg-gtahidiPurple p-3 rounded mt-5">
                    Create Quizzes
                </button>
            </div>
        </div>
    );
};

export default ResultPage;

