// components/FeedbackForm.js
import React from 'react';

const FeedbackForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-end">
          <button onClick={onClose}>X</button>
        </div>
        {/* Rating Stars */}
        <div className="flex my-4">
          {/* Repeat this button for 5 stars */}
          <button className="text-yellow-400 text-2xl">☆</button>
        </div>
        {/* Feedback Text Area */}
        <textarea className="w-full h-20 p-2 border rounded" placeholder="Your feedback"></textarea>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Submit</button>
      </div>
    </div>
  );
};

export default FeedbackForm;
