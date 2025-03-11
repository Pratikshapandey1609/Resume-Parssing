
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { IoMdSend } from "react-icons/io";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Smooth scrolling effect when new response is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [answer]);

  async function generateAnswer() {
    console.log("loading....");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBoliUcUGLCGYHjDMhz0AjTt0sFND6g3pM",
        method: "post",
        data: {
          "contents": [{
            "parts": [{ "text": question }]
          }]
        },
      });

      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    } catch (error) {
      console.error("Error fetching answer:", error);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Toggle Button */}
      <button
        className="bg-zinc-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose size={24} /> : <IoChatbubbleEllipsesOutline size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 max-h-[450px]  text-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-gray-600  text-white px-4 py-3 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Talent Flux Chatbot</h3>
            <button className="text-zinc-900  text-xl hover:text-gray-400 transition" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          {/* Chat Area with Scrollable Messages */}
          <div className="flex-1  bg-gray-800 p-4 overflow-y-auto max-h-[300px] custom-scrollbar">
            {question && (
              <p className="bg-gray-600  text-white p-3 rounded-md mb-2 self-end">
                <b>Me 🧑‍💻:</b> {question}
              </p>
            )}
            {answer && (
              <p className="bg-gray-600 text-white p-3 rounded-md">
                <b>Nexa⚡:</b> {answer}
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <div className="border-t p-3 bg-gray-800  text-white  flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-800   border rounded-md focus:ring-2 focus:ring-purple-500"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button className="bg-zinc-700 text- px-4 py-2 rounded-full  hover:bg-purple-800 transition-all" onClick={generateAnswer}>
              <IoMdSend size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;



// import React, { useState } from 'react'
// import axios from 'axios';

// function Chatbot() {

//   const [question , setQuestion] = useState("");
//   const [answer , setAnswer] = useState("");

//   async function generateAnswer(){
//     console.log("loading....");
//      const response = await axios({
//       url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBoliUcUGLCGYHjDMhz0AjTt0sFND6g3pM",
//       method : "post",
//       data :{
//           "contents": [{
//             "parts":[{"text": question}]
//           }]},
//      });

     
//       setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
//   }
//   return (
//     <>
//       <h1>Chat AI </h1>
//       <input value={question}
//       onChange={(e)=> setQuestion(e.target.value)}
//       cols = "10"
//       rows = "10"
//       ></input>
//       <button onClick={generateAnswer}>Generate Answers </button>

//       <pre>{answer}</pre>
//     </>
//   )
// }

// export default Chatbot;


