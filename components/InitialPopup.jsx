// components/InitialPopup.js
import React from 'react';

const InitialPopup = ({ onLater, onNow }) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md">
        <p>Would you like to give feedback?</p>
        <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={onNow}>Now</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onLater}>Later</button>
      </div>
    </div>
  );
};

export default InitialPopup;
