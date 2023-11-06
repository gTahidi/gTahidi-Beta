'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

interface ChatMessage {
  type: "user" | "response";
  content: string;
}

const ChatPage: React.FC = () => {
    const [showUpgradeModal, setShowUpgradeModal] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const chatContainerRef = React.useRef(null);
    const router = useRouter();

    const upgrade = () => {
        router.push("/dashboard/pricing");
    };

    const close = () => {
        router.push("/dashboard");
    };

    const sendMessage = async () => {
        try {
            // Immediately display the user's message
            setChatHistory(prevHistory => [...prevHistory, { type: "user", content: message }]);
    
            const response = await fetch('https://gtahidicopilot.azurewebsites.net/api/copilot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.text();
    
            // Introduce a delay (e.g., 1 second) before displaying the response
            setTimeout(() => {
                setChatHistory(prevHistory => [...prevHistory, { type: "response", content: data }]);
            }, 1000);
    
            setMessage("");
        } catch (error) {
            console.error("There was an error sending the message:", error);
        }
    };
    

    React.useEffect(() => {
        if (chatContainerRef.current) {
            (chatContainerRef.current as HTMLDivElement).scrollTop = (chatContainerRef.current as HTMLDivElement).scrollHeight;
        }
    }, [chatHistory]);
    
    

    return (
        <div className="">
            {showUpgradeModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 md:p-8 rounded shadow-lg w-full md:w-1/3 text-center">
                        <h3 className="text-2xl font-bold text-black mb-4">Upgrade to Premium</h3>
                        <p className="text-gtahidiPurple">Get access to advanced features like Upload Data and Chat by upgrading to our premium plan.</p>
                        <div className="md:space-x-2 mt-4">
                            <button className="bg-gtahidiPurple p-3 rounded text-white font-medium" onClick={upgrade}>Upgrade</button>
                            <button className="bg-red-500 p-3 rounded text-white font-medium" onClick={close}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            <div className='flex flex-col items-center m-2'>
                <h1 className='text-3xl font-bold p-4 '>gTahidiAI Chat</h1>
                <h1 className=''>Don't be too harsh on me 😄. I'm still learning </h1>
            </div>

            <div className="min-h-screen flex items-center justify-center top-0">
                <div className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
                <div className="p-4 rounded mb-4 overflow-y-auto h-full" ref={chatContainerRef}>
                    {chatHistory.map((msg, index) => (
                        <div key={index} className={`p-2 ${msg.type === "user" ? "text-right" : ""}`}>
                            <span className={`inline-block rounded-lg px-3 py-2 ${msg.type === "user" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"}`}>
                                {msg.content}
                            </span>
                        </div>
                    ))}
                </div>


                    {/* <div className="flex flex-col md:flex-row items-center p-4 justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 text-center">Time-based Activity
                            <p className="text-gray-500 text-sm">Ideas for engaging student activities.</p>
                        </button>
                        <button className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 text-center">Generate Homework
                            <p className="text-gray-500 text-sm">For students to work on after lessons.</p>
                        </button>
                    </div> */}
                    <div className="mt-4 flex items-center border border-gray-300 rounded-full">
                        <input
                            className="flex-grow py-2 px-4 rounded-full"
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button className="p-2" onClick={sendMessage}>
                            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-gray-700" viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
