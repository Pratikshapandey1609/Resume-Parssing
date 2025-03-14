import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem("authToken");
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      {/* AI Avatar */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        alt="AI Avatar"
        className="w-28 h-28 rounded-full shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      />

      {/* Logout Box */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full"
      >
        <h1 className="text-3xl font-extrabold text-gray-900">Logging Out?</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Your journey doesn’t end here! We’ll be waiting for your return. 👋
        </p>

        {/* Logout Buttons */}
        <div className="mt-6 flex gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md font-semibold hover:bg-red-800 transition"
          >
            Yes, Logout
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)} // Go back
            className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md font-semibold hover:bg-gray-700 transition"
          >
            Cancel
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Text */}
      <p className="text-gray text-sm mt-6">
        Made with ❤️ for a seamless experience ✨
      </p>

      <Chatbot />
    </div>
  );
}

export default Logout;
