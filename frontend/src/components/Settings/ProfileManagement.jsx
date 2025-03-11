import React from "react";
import { motion } from "framer-motion";

const ProfileManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto bg-white shadow-xl p-6 rounded-lg text-center"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">👤 Profile Management</h1>
      <p className="text-gray-600">Manage your profile details and update your information.</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Edit Profile
      </motion.button>
    </motion.div>
  );
};

export default ProfileManagement;
