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

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-white rounded-lg  p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10  border border-white/20 backdrop-blur-xl shadow-2xl rounded-2xl p-6 w-full max-w-5xl flex flex-col md:flex-row gap-8"
      >
        {/* Left: Profile Avatar + Info */}
        <div className="flex flex-col items-center text-center md:w-1/3 text-white">
          <FaUserCircle size={110} className="text-gray-500 mb-4" />
          <h2 className="text-2xl text-gray-500 font-bold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm text-gray-400">{user.phone}</p>
          <p className="text-sm text-gray-400">{user.location}</p>
          <p className="text-sm italic text-gray-400 mt-2">{user.bio}</p>
        </div>

        {/* Right: Edit & Settings */}
        <div className="flex-1 text-white">
          {isEditing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {["name", "email", "phone", "location"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize">{field}</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-gray-800 border rounded text-white  mt-1"
                    value={editedUser[field]}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, [field]: e.target.value })
                    }
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium">Bio</label>
                <textarea
                  className="w-full p-2 bg-gray-800 border rounded text-white mt-1"
                  value={editedUser.bio}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, bio: e.target.value })
                  }
                />
              </div>
            </motion.div>
          ) : (
            <div className="text-right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 px-5 py-2 rounded-lg text-white font-bold shadow hover:bg-blue-600"
                onClick={handleEditClick}
              >
                <FaEdit className="inline mr-2" /> Edit Profile
              </motion.button>
            </div>
          )}

          {/* Save Button */}
          {isEditing && (
            <div className="mt-4 text-right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 px-6 py-2 rounded-lg font-bold text-white hover:bg-green-600"
                onClick={handleSaveClick}
              >
                Save Changes
              </motion.button>
            </div>
          )}

          {/* Settings */}
          <div className="mt-8 pt-4 border-t border-white/20">
            <h3 className="text-lg text-gray-600 font-semibold mb-4">⚙️ Settings</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/change-password")}
                className="w-full bg-gray-800 p-3 rounded-lg flex justify-between items-center hover:bg-gray-700"
              >
                <span><FaLock className="inline mr-2 text-blue-400" /> Change Password</span>
                <span>➡</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/notifications")}
                className="w-full bg-gray-800 p-3 rounded-lg flex justify-between items-center hover:bg-gray-700"
              >
                <span><FaBell className="inline mr-2 text-green-400" /> Notification Settings</span>
                <span>➡</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/theme-preferences")}
                className="w-full bg-gray-800 p-3 rounded-lg flex justify-between items-center hover:bg-gray-700"
              >
                <span><FaPalette className="inline mr-2 text-purple-400" /> Theme Preferences</span>
                <span>➡</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileManagement;
