'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";

const Result = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL with the objectId as a parameter
    const apiUrl =
      "https://serverlogic.azurewebsites.net/api/fetchData?objectId=64f9527731f5dc105a19849a";

    // Fetch data from the API using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex-grow flex p-5">
      <div className="flex-grow overflow-y-auto max-h-screen">
        {data ? (
          <div className='max-h-screen'>
            <h2 className="text-lg font-bold mb-3">{data.subject}</h2>
            <h3 className="text-md font-semibold mb-2">{data.topic}</h3>
            <div className="text-gray-700">
              {data.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="ml-auto flex flex-col text-white">
        <button className="bg-gtahidiPurple p-3 rounded">Create Notes</button>
        <button className="bg-gtahidiPurple p-3 rounded mt-5">
          Create Quizzes
        </button>
      </div>
    </div>
  );
};

export default Result;

