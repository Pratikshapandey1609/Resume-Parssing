import React, { useState } from "react";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot";

const UserGuidePage = () => {
  const [openStep, setOpenStep] = useState(null);

  // Guide Steps
  const guideSteps = [
    {
      id: 1,
      title: "Getting Started 🚀",
      content: "Sign up and create your profile to access the platform's full features.",
      image: "/assets/signup.png", // Replace with actual image path
      video: "/assets/signup-demo.mp4", // Replace with actual video path
    },
    {
      id: 2,
      title: "Navigating the Dashboard 🖥️",
      content: "Use the side navbar to switch between features like chat, reviews, and settings.",
      image: "/assets/dashboard.png",
      video: "/assets/dashboard-demo.mp4",
    },
    {
      id: 3,
      title: "Using the Chatbot 💬",
      content: "Ask any question, and our AI will provide instant responses.",
      image: "/assets/chatbot.png",
      video: "/assets/chatbot-demo.mp4",
    },
    {
      id: 4,
      title: "Submitting Reviews ⭐",
      content: "Write your experience, upload images/videos, and upvote reviews.",
      image: "/assets/reviews.png",
      video: "/assets/reviews-demo.mp4",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">📖 User Guide</h1>

      {/* Guide Sections */}
      <div className="w-full max-w-3xl">
        {guideSteps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-800 p-4 rounded-lg shadow-md mb-4"
          >
            {/* Step Title */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenStep(openStep === step.id ? null : step.id)}
            >
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <span>{openStep === step.id ? "🔼" : "🔽"}</span>
            </div>

            {/* Content (Expands on Click) */}
            {openStep === step.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-3"
              >
                <p className="text-gray-700">{step.content}</p>
                {/* Display Image */}
                {step.image && (
                  <img src={step.image} alt="Guide step" className="mt-3 rounded-md w-full shadow" />
                )}
                {/* Display Video */}
                {step.video && (
                  <video src={step.video} controls className="mt-3 rounded-md w-full shadow" />
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <Chatbot />

    </div>
  );
};

export default UserGuidePage;
