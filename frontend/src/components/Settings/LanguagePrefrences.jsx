import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LanguagePreferences = () => {
  const { t, i18n } = useTranslation(); // Import i18n for language change

  // Function to change language
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto bg-white shadow-xl p-6 rounded-lg text-center"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🌍 {t("Language Preferences")}</h1>
      <p className="text-gray-800">{t("Select your preferred language for the application.")}</p>

      {/* Dropdown for selecting language */}
      <select
        className="mt-4 px-4 text-gray-800 py-2 border rounded-md w-full"
        onChange={changeLanguage} // Call changeLanguage function on selection
        value={i18n.language} // Sync with the selected language
      >
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Spanish</option>
        <option value="fr">🇫🇷 French</option>
      </select>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
      >
        {t("Save Preferences")}
      </motion.button>
    </motion.div>
  );
};

export default LanguagePreferences;







// import React from "react";
// import { motion } from "framer-motion";

// const LanguagePreferences = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-lg mx-auto bg-white  shadow-xl p-6 rounded-lg text-center"
//     >
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">🌍 Language Preferences</h1>
//       <p className="text-gray-800">Select your preferred language for the application.</p>
//       <select className="mt-4 px-4 text-gray-800 py-2 border rounded-md w-full">
//         <option>English</option>
//         <option>Spanish</option>
//         <option>French</option>
//       </select>
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
//       >
//         Save Preferences
//       </motion.button>
//     </motion.div>
//   );
// };

// export default LanguagePreferences;



// import React from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// const LanguagePreferences = ({ onLanguageChange }) => {
//   const { t } = useTranslation();

//   const handleLanguageChange = (event) => {
//     const newLanguage = event.target.value;
//     onLanguageChange(newLanguage); // Call function from props
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-lg mx-auto bg-white shadow-xl p-6 rounded-lg text-center"
//     >
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">🌍 {t("Language Preferences")}</h1>
//       <p className="text-gray-800">{t("Select your preferred language for the application.")}</p>
      
//       <select
//         className="mt-4 px-4 text-gray-800 py-2 border rounded-md w-full"
//         onChange={handleLanguageChange} // Attach function
//       >
//         <option value="en">{t("English")}</option>
//         <option value="es">{t("Spanish")}</option>
//         <option value="fr">{t("French")}</option>
//       </select>

//       <motion.button
//         whileHover={{ scale: 1.05 }}  
//         className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
//       >
//         {t("Save Preferences")}
//       </motion.button>
//     </motion.div>
//   );
// };

// export default LanguagePreferences;
