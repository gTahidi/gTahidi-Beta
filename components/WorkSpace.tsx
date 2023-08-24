import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewLesson, updateLessonData } from '../redux/topics/lessonSlice'; // Update the path

export const WorkSpace = () => {
  const dispatch = useDispatch();
  const lessonData = useSelector(state => state.lesson.lessonData);

  const handleChange = (e) => {
    dispatch(updateLessonData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createNewLesson(lessonData));
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
      </form>
    </div>
  );
};
