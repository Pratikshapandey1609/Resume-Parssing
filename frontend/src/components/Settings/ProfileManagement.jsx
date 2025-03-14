// import React from "react";
// import { motion } from "framer-motion";

// const ProfileManagement = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-lg mx-auto bg-white shadow-xl p-6 rounded-lg text-center"
//     >
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">👤 Profile Management</h1>
//       <p className="text-gray-600">Manage your profile details and update your information.</p>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//       >
//         Edit Profile
//       </motion.button>
//     </motion.div>
//   );
// };

// export default ProfileManagement;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEdit, FaLock, FaBell, FaPalette } from "react-icons/fa";

const ProfileManagement = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    name: "Pratiksha Pandey",
    email: "pratiksha@example.com",
    phone: "+91 9876543210",
    location: "India",
    bio: "MERN Stack Developer | Tech Enthusiast 🚀",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/10 shadow-2xl rounded-xl px-8 py-10 max-w-lg w-full text-center border border-white/20"
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-gray-200" size={100} />
          <h2 className="text-3xl font-bold text-white mt-4">{user.name}</h2>
          <p className="text-gray-300">{user.email}</p>
          <p className="text-gray-300">{user.phone}</p>
          <p className="text-gray-300">{user.location}</p>
          <p className="text-gray-400 italic mt-2">{user.bio}</p>
        </div>

        {/* Edit Mode */}
        {isEditing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-left text-white"
          >
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded bg-gray-800 text-white mt-1"
              value={editedUser.name}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
            />

            <label className="text-sm font-semibold mt-3 block">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded bg-gray-800 text-white mt-1"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />

            <label className="text-sm font-semibold mt-3 block">Phone</label>
            <input
              type="text"
              className="w-full border p-2 rounded bg-gray-800 text-white mt-1"
              value={editedUser.phone}
              onChange={(e) =>
                setEditedUser({ ...editedUser, phone: e.target.value })
              }
            />

            <label className="text-sm font-semibold mt-3 block">Location</label>
            <input
              type="text"
              className="w-full border p-2 rounded bg-gray-800 text-white mt-1"
              value={editedUser.location}
              onChange={(e) =>
                setEditedUser({ ...editedUser, location: e.target.value })
              }
            />

            <label className="text-sm font-semibold mt-3 block">Bio</label>
            <textarea
              className="w-full border p-2 rounded bg-gray-800 text-white mt-1"
              value={editedUser.bio}
              onChange={(e) =>
                setEditedUser({ ...editedUser, bio: e.target.value })
              }
            />
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {isEditing ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-5 py-2 rounded-lg font-bold shadow-md hover:bg-green-600"
              onClick={handleSaveClick}
            >
              Save
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg font-bold shadow-md hover:bg-blue-600"
              onClick={handleEditClick}
            >
              <FaEdit className="inline mr-2" /> Edit Profile
            </motion.button>
          )}
        </div>

        {/* Settings Section */}
        <div className="mt-8 border-t border-white/20 pt-5">
          <h3 className="text-lg font-bold text-white">Settings & Preferences</h3>
          <div className="mt-4 flex flex-col gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-all"
              onClick={() => navigate("/change-password")}
            >
              <span><FaLock className="inline mr-2 text-blue-400" /> Change Password</span>
              <span>➡</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-all"
              onClick={() => navigate("/notifications")}
            >
              <span><FaBell className="inline mr-2 text-green-400" /> Notification Settings</span>
              <span>➡</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-all"
              onClick={() => navigate("/theme-preferences")}
            >
              <span><FaPalette className="inline mr-2 text-purple-400" /> Theme Preferences</span>
              <span>➡</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileManagement;
