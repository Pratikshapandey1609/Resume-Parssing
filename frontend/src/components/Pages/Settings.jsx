import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot"; 
import ProfileManagement from "../Settings/ProfileManagement";
import ChangePassword from "../Settings/ChangePassword";
import LanguagePreferences from "../Settings/LanguagePrefrences";

// // Import components for each setting section
// const ProfileManagement = () => <h1 className="text-3xl font-bold">👤 Profile Management</h1>;
// const ChangePassword = () => <h1 className="text-3xl font-bold">🔑 Change Password</h1>;
// const DarkLightMode = () => <h1 className="text-3xl font-bold">🌙 Dark/Light Mode</h1>;
// const LanguagePreferences = () => <h1 className="text-3xl font-bold">🌍 Language Preferences</h1>;

function Settings() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [selectedOption, setSelectedOption] = useState("Profile Management");

  // Mapping setting options to components
  const settingComponents = {
    "Profile Management": <ProfileManagement/>,
    "Change Password": <ChangePassword />,
    "Language Preferences": <LanguagePreferences />,
  };

  return (
    <div className={`flex h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Main Content (Dynamically Changes Based on Selection) */}
      <div className="flex-1 flex items-center justify-center p-8 transition-all">
        {settingComponents[selectedOption]}
      </div>

      {/* Animated Sidebar (Now on the Right Side) */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`w-64 p-6 fixed right-0 top-0 h-full shadow-lg rounded-l-lg transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">⚙ Settings</h2>

        {/* Settings List with Hover Effects */}
        <ul className="space-y-4">
          {Object.keys(settingComponents).map((item, index) => (
            <motion.li
              key={index}
              onClick={() => setSelectedOption(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-md cursor-pointer text-lg text-center font-semibold transition-colors ${
                selectedOption === item
                  ? darkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-400 text-black"
                  : darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Toggle Dark Mode Button (Bottom Right) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className={`fixed bottom-10 right-10 px-5 py-2 rounded-full text-lg font-semibold shadow-lg transition-all ${
            darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
          }`}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </motion.button>
      </motion.div>

      <Chatbot />
      
    </div>
  );
}

export default Settings;



// import React, { useContext, useState } from "react";
// import { ThemeContext } from "../../App";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import Chatbot from "../Chatbot"; 
// import ProfileManagement from "../Settings/ProfileManagement";
// import LanguagePreferences from "../Settings/LanguagePrefrences";
// import ChangePassword from "../Settings/ChangePassword";

// function Settings({ onLanguageChange }) {  // ✅ Receive onLanguageChange as a prop
//   const { darkMode, setDarkMode } = useContext(ThemeContext);
//   const { t } = useTranslation();
//   const [selectedOption, setSelectedOption] = useState("Profile Management");

//   // ✅ Pass onLanguageChange to LanguagePreferences
//   const settingComponents = {
//     "Profile Management": <ProfileManagement />,
//     "Change Password": <ChangePassword />,
//     "Language Preferences": <LanguagePreferences onLanguageChange={onLanguageChange} />,
//   };

//   return (
//     <div className={`flex h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
//       {/* Main Content */}
//       <div className="flex-1 flex items-center justify-center p-8 transition-all">
//         {settingComponents[selectedOption]}
//       </div>

//       {/* Sidebar */}
//       <motion.div
//         initial={{ x: 200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className={`w-64 p-6 fixed right-0 top-0 h-full shadow-lg rounded-l-lg transition-all duration-300 ${
//           darkMode ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-center">⚙ {t("Settings")}</h2>

//         <ul className="space-y-4">
//           {Object.keys(settingComponents).map((item, index) => (
//             <motion.li
//               key={index}
//               onClick={() => setSelectedOption(item)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`p-3 rounded-md cursor-pointer text-lg text-center font-semibold transition-colors ${
//                 selectedOption === item
//                   ? darkMode
//                     ? "bg-blue-600 text-white"
//                     : "bg-blue-400 text-black"
//                   : darkMode
//                   ? "bg-gray-700 hover:bg-gray-600"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {t(item)}
//             </motion.li>
//           ))}
//         </ul>

//         {/* Dark Mode Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setDarkMode(!darkMode)}
//           className={`fixed bottom-10 right-10 px-5 py-2 rounded-full text-lg font-semibold shadow-lg transition-all ${
//             darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
//           }`}
//         >
//           {darkMode ? t("Light Mode") : t("Dark Mode")}
//         </motion.button>
//       </motion.div>

//       <Chatbot />
      
//     </div>
//   );
// }

// export default Settings;
