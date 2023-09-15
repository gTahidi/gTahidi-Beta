'use client'


import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://serverlogic.azurewebsites.net/api/fetchNotes?code=15isWYDPB2miM2wIhlzmIS-ASI4IptnoV0PH8XOR41mdAzFuB_LnoA==";

    const headers = {
      lessonplanId: "65017336a27f3e2cb4ee83a4",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {

        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []); 

  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Notes</DashboardPageTitle>
      <DashboardPageButton text="Create Notes" />
      <DashboardPageTableHeader />
      {/* Render the notes */}
      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            {/* Render the note content */}
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
