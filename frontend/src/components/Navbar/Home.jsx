import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { motion } from "framer-motion";
import Chatbot from "../Chatbot";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex h-screen "> {/** // removing bg  for light dark mode  bg-gradient-to-r from-purple-600 to-red-500 */}
      {/* Sidebar */}
      

      {/* Main Content with Animation */}
      <div className=" flex-1 flex items-center justify-center p-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-white/50 to-gray-200/50 p-10 rounded-2xl shadow-2xl backdrop-blur-md text-center max-w-3xl"
        >
          <h1 className="text-5xl font-bold text-blue-900 animate-pulse">
            TalentFlux 📄
          </h1>
          <p className="text-gray-700 mt-4 font-sans text-lg font-bold">
            Extract, analyze, and categorize resumes efficiently with AI-powered parsing.
          </p>
          <p className="text-blue-600 font-sans font-semibold mt-2">
            "Automate. Analyze. Hire Faster."
          </p>

          {/* Animated Button with Link */}
          <Link to = "/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-lg font-serif transition-all shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <Chatbot />

    
    </div>
  );
}

export default Home;

