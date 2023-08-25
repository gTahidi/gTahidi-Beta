import { createNewLesson, updateLessonData, BASE_URL } from '../redux/topics/lessonSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export const WorkSpace = () => {
  const dispatch = useDispatch();
  const lessonData = useSelector(state => state.lesson.lessonData);
  const [responseText, setResponseText] = useState('');

  const handleChange = (e) => {
    dispatch(updateLessonData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createNewLesson(lessonData));

      const response = await axios.post(BASE_URL, {
        messages: [
          {
            role: 'user',
            content: `create a lesson plan on\n'subject':'${lessonData.subject}',\n'substrand': '${lessonData.subStrand}',\n'topic': '${lessonData.topic}',\n'duration': '${lessonData.duration}',\n'grade': ${lessonData.grade}`
          }
        ]
      });

      setResponseText(response.data.choices[0]?.message?.content || '');
    } catch (error) {
      console.error("Failed to create lesson plan:", error);
    }
  };

  return (
    <div className="flex-grow flex flex-col">
      <div className="text-center py-2 mt-2">
        follow these simple steps to create a lesson plan today
      </div>
      <form className="w-3/4 sm:w-1/2 mx-auto my-auto text-sm" onSubmit={handleSubmit}>
        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Enter Subject"
            className="w-1/2 p-3 rounded"
            name="subject"
            value={lessonData.subject}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Topic"
            className="w-1/2 p-3 rounded"
            name="topic"
            value={lessonData.topic}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-x-2 mt-5">
          <input
            type="text"
            placeholder="Enter Sub strand"
            className="w-1/2 p-3 rounded"
            name="subStrand"
            value={lessonData.subStrand}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Grade"
            className="w-1/2 p-3 rounded"
            name="grade"
            value={lessonData.grade}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Duration in minutes"
          className="w-full p-3 mt-5"
          name="duration"
          value={lessonData.duration}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-center w-full mt-7 bg-gtahidiPurple py-3 text-white rounded-md"
        >
          Create Lesson Plan
        </button>

        <div>
          <h2>AI Response:</h2>
          <p>{responseText}</p>
        </div>
      </form>
    </div>
  );
};
