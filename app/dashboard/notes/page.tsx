'use client';

import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import { marked } from "marked";


interface NoteWrapper {
  lessonNotes: {
    notes: string;
  };
}

const Page = () => {
  const [storedNotes, setStoredNotes] = useState<NoteWrapper[]>([]);
  const router = useRouter();


  function formatContent(content: string): string {
    let formattedContent = marked(content); 
    formattedContent = formattedContent.replace(/<h1>/g, '<h1 class="text-2xl font-bold my-4">');
    formattedContent = formattedContent.replace(/<h2>/g, '<h2 class="text-xl font-semibold my-3">');
    formattedContent = formattedContent.replace(/<h3>/g, '<h3 class="text-lg font-medium my-2">');
    formattedContent = formattedContent.replace(/<ul>/g, '<ul class="list-disc pl-5">');
    formattedContent = formattedContent.replace(/<ol>/g, '<ol class="list-decimal pl-5">');
    formattedContent = formattedContent.replace(/<li>/g, '<li class="my-1">');
  
    formattedContent = formattedContent.replace(/<p>/g, '<p class="my-2">');
  
    
    return formattedContent;
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
      <div className="notes-list overflow-y-auto max-h-[80vh] scrollbar-hide space-y-4"> 
        {storedNotes.map((noteWrapper, i) => {
          const note = noteWrapper.lessonNotes;
          const fullyFormattedNote = formatContent(note.notes);
          
          return (
            <div key={i} className="note bg-white shadow-lg rounded-lg p-6 space-y-2">
              <h3 className="text-xl font-semibold mb-2 tracking-wide">{note.notes.split("\n")[0]}</h3>
              <div className="text-base leading-relaxed tracking-wide space-y-2" dangerouslySetInnerHTML={{ __html: fullyFormattedNote }}></div>
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
