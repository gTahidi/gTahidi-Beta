// 'use client';

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";  // Adjusted from next/navigation which is not standard
// import { marked } from "marked";
// import { useSession } from 'next-auth/react';
// import { toast } from "react-toastify";

// interface NoteData {
//   _id: string;
//   notes: string;
// }

// interface CustomSession {
//   user: {
//       id?: string;
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//   };
// }

// function formatContent(content: string): string {
//   let formattedContent = marked(content); 
//   formattedContent = formattedContent.replace(/<h1>/g, '<h1 class="text-2xl font-bold my-4">');
//   formattedContent = formattedContent.replace(/<h2>/g, '<h2 class="text-xl font-semibold my-3">');
//   formattedContent = formattedContent.replace(/<h3>/g, '<h3 class="text-lg font-medium my-2">');
//   formattedContent = formattedContent.replace(/<ul>/g, '<ul class="list-disc pl-5">');
//   formattedContent = formattedContent.replace(/<ol>/g, '<ol class="list-decimal pl-5">');
//   formattedContent = formattedContent.replace(/<li>/g, '<li class="my-1">');
//   formattedContent = formattedContent.replace(/<p>/g, '<p class="my-2">');
//   return formattedContent;
// }

// const ViewNote = () => {
//   const router = useRouter();
//   const [note, setNote] = useState<NoteData | null>(null);
//   const { data: session } = useSession() as { data: CustomSession | null };

//   useEffect(() => {
//     let noteId;
//     // First, attempt to retrieve from router's query
//     if (router.isReady) {
//         noteId = router.query.noteId as string;
//     }

//     // If not found in router's query, try local storage
//     if (!noteId) {
//         noteId = localStorage.getItem("selectedNoteId");
//     }

//     if (noteId) {
//         fetch(`https://serverlogic.azurewebsites.net/api/specificNote?noteId=${noteId}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setNote(data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching note:', error);
//                 toast.error("Error fetching note.");
//             });
//     }
// }, [router.isReady, router.query]);

//   return (
//     <div className="dashboard-container">
//       {note ? (
//           <div className="note-container bg-white shadow-lg rounded-lg p-6 my-4 w-full">
//             <h3 className="text-xl font-semibold mb-2 tracking-wide">{note.notes.split("\n")[0]}</h3>
//             <div className="text-base leading-relaxed tracking-wide space-y-2" dangerouslySetInnerHTML={{ __html: formatContent(note.notes) }}></div>
//           </div>
//       ) : (
//           <div className="loading-container flex flex-col items-center justify-center h-full">
//             <div className="spinner">
//                 <span role="img" aria-label="spinner" className="spin-icon">⏳</span>
//             </div>
//             <p className="loading-text mt-4 text-center">Loading note details...</p>
//           </div>
//       )}
//       {/* You can add styles similarly as in your other components */}
//     </div>
//   );
// };

// export default ViewNote;


import React from 'react'

function page() {
  return (
    <div>
      
    </div>
  )
}

export default page
