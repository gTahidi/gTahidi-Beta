'use client'


import DashboardPageButton from "@/components/DashboardPageButton";
import { DashboardPageTableHeader } from "@/components/DashboardPageTableHeader";
import { DashboardPageTitle } from "@/components/DashboardPageTitle";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  
import { marked } from "marked";

interface NoteWrapper {
  notes: string;
}

interface CustomSession {
  user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
  };
}

const Page = () => {
  const [storedNotes, setStoredNotes] = useState<NoteWrapper[]>([]);
  const [loading, setLoading] = useState(true);  // added loading state
  const { data: session } = useSession() as { data: CustomSession | null };
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
    const fetchNotes = async () => {
      try {
        const oid = session?.user?.oid // extracting oid
        if(!oid) {
          throw new Error("User ID is not found");
        }
        const url = 'https://serverlogic.azurewebsites.net/api/fetchNotes?code=15isWYDPB2miM2wIhlzmIS-ASI4IptnoV0PH8XOR41mdAzFuB_LnoA==&oid=${oid}'
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setStoredNotes(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      } finally {
        setLoading(false);  
      }
    };
    if (session?.user?.id) {
    fetchNotes();
    }
  }, [session]);
  
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
        {loading ? (
          <div className="loading-container flex flex-col items-center justify-center h-full">
            <div className="spinner">
              <span role="img" aria-label="spinner" className="spin-icon">⏳</span>
            </div>
            <p className="loading-text mt-4 text-center">
              Sit tight, the notes are loading <span role="img" aria-label="smiley">😊</span>
            </p>
          </div>
        ) : (
          storedNotes.map((note, i) => {  // Changed noteWrapper to note
            const fullyFormattedNote = formatContent(note.notes);  // Directly access notes property
            
            return (
              <div key={i} className="note bg-white shadow-lg rounded-lg p-6 space-y-2">
                <h3 className="text-xl font-semibold mb-2 tracking-wide">{note.notes.split("\n")[0]}</h3>
                <div className="text-base leading-relaxed tracking-wide space-y-2" dangerouslySetInnerHTML={{ __html: fullyFormattedNote }}></div>
              </div>
            )
          })
        )}
      </div>
      <style jsx>{`
        // ... (rest of your styles, plus styles for the loading container, spinner, and loading text)
        .loading-container {
          /* Style for the loading container */
        }
        .spinner {
          animation: spin 2s linear infinite;
        }
        .spin-icon {
          /* Style for the spinning icon (text or image) */
        }
        .loading-text {
          /* Style for the loading text */
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
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
