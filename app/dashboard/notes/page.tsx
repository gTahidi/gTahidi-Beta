'use client';

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React, { useEffect, useState } from "react";

// Define the interface for the note structure
interface NoteWrapper {
  lessonNotes: {
    notes: string;
    // You can add more properties here if needed.
  };
}

const Page = () => {
  // Specify the type for storedNotes as an array of NoteWrapper
  const [storedNotes, setStoredNotes] = useState<NoteWrapper[]>([]);

  function formatNotes(notes: string): string {
    // Add line breaks before numbers followed by a dot (e.g., 1., 2., etc.)
    notes = notes.replace(/(\d+\.) /g, '<br />$1 ');
    
    // Add line breaks before uppercase roman numerals followed by a dot (e.g., I., II., etc.)
    notes = notes.replace(/( [IVXLCDM]+\.) /g, '<br />$1 ');
    
    // Add line breaks before "Step" followed by numbers
    notes = notes.replace(/(Step \d+:)/g, '<br />$1');
    
    return notes;
  }
  
  useEffect(() => {
    const notesFromLocalStorage = localStorage.getItem('createdNotes');
    console.log("notes from local storage", notesFromLocalStorage);
    if (notesFromLocalStorage) {
      setStoredNotes(JSON.parse(notesFromLocalStorage));
    }
  }, []);

  return (
    <div className="dashboard-container">
      {/* <DashboardPageTitle>Notes</DashboardPageTitle>
      <DashboardPageButton text="Create Notes" />
      <DashboardPageTableHeader /> */}
      <div className="notes-list">
        {storedNotes.map((noteWrapper, i) => {
          const note = noteWrapper.lessonNotes;
          const formattedNote = formatNotes(note.notes); // Format the note here
          
          return (
            <div key={i} className="note">
              <h3>{note.notes.split("\n")[0]}</h3>
              <p dangerouslySetInnerHTML={{ __html: formattedNote }}></p> {/* Render the formatted note using dangerouslySetInnerHTML */}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Page;