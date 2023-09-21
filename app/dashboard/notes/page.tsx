'use client';

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

interface NoteWrapper {
  lessonNotes: {
    notes: string;
  };
}

const Page = () => {
  const [storedNotes, setStoredNotes] = useState<NoteWrapper[]>([]);
  const router = useRouter();


  function formatNotes(notes: string): string {
    notes = notes.replace(/(\d+\.) /g, '<br />$1 ');
    notes = notes.replace(/( [IVXLCDM]+\.) /g, '<br />$1 ');
    notes = notes.replace(/(Step \d+:)/g, '<br />$1');
    notes = notes.replace(/([a-zA-Z]\)) /g, '<br />$1 ');
    return notes;
  }
  
  useEffect(() => {
    const notesFromLocalStorage = localStorage.getItem('createdNotes');
    if (notesFromLocalStorage) {
      setStoredNotes(JSON.parse(notesFromLocalStorage));
    }
  }, []);
  
  const handleBack = () => {
    router.push("/dashboard/result"); 
  };
    


  

  return (
    <div className="dashboard-container">
      <DashboardPageTitle>Notes</DashboardPageTitle>
      <button 
        onClick={handleBack}
        className="bg-white py-3 w-1/2 sm:w-1/6 rounded-full text-gtahidiDarkBlue font-semibold text-sm ml-auto">Lesson Plan
      </button>
      <div className="notes-list overflow-y-auto h-screen scrollbar-hide"> 
        {storedNotes.map((noteWrapper, i) => {
          const note = noteWrapper.lessonNotes;
          const formattedNote = formatNotes(note.notes);
          
          return (
            <div key={i} className="note bg-white shadow-lg rounded-lg p-6 my-4">
              <h3 className="text-xl font-semibold mb-2 tracking-wide">{note.notes.split("\n")[0]}</h3>
              <p className="text-base leading-relaxed tracking-wide" dangerouslySetInnerHTML={{ __html: formattedNote }}></p>
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Page;
