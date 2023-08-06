import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const LeftNav = () => {
  return (
    <div className="bg-black w-1/5 text-white flex flex-col justify-between text-sm">
      <div className="flex items-center mx-2 border-white py-4 px-2 mt-2 rounded cursor-pointer border-2">
        <FontAwesomeIcon icon={faPlus} className="w-5 h-5 mr-3" />
        <p>New Lesson Plan</p>
      </div>
      <div className="flex items-center mx-2 border-white py-3 px-2 mb-2 rounded cursor-pointer border-2 w-1/2 ml-auto">
        <FontAwesomeIcon icon={faPlus} className="w-5 h-5 mr-3" />
        <p>Log out</p>
      </div>
    </div>
  );
};
