// LessonPlanComponent.tsx

import React from 'react';

type LessonPlanData = {
    lessonPlan: {
        subject: string;
        topic: string;
        grade: number;
        content: string;
        _id: string;
        __v: number;
    };
};

type Props = {
    data: LessonPlanData | null;
};

const LessonPlanComponent: React.FC<Props> = ({ data }) => {
    return (
        <div>
            {data && data.lessonPlan ? (
                <div>
                    <p><strong>Subject:</strong> {data.lessonPlan.subject}</p>
                    <p><strong>Topic:</strong> {data.lessonPlan.topic}</p>
                    <p><strong>Grade:</strong> {data.lessonPlan.grade}</p>
                    <p><strong>Content:</strong> {data.lessonPlan.content}</p>
                </div>
            ) : (
                <p>No results available</p>
            )}
        </div>
    );
};

export default LessonPlanComponent;
