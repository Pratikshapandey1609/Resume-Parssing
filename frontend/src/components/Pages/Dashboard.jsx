// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// function Dashboard() {
//   const { t } = useTranslation();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-3xl w-full"
//       >
//         <h1 className="text-4xl font-extrabold text-blue-900 animate-pulse">
//           {t("AI Resume Analyzer")}
//         </h1>
//         <p className="text-gray-700 mt-3 text-lg font-semibold">
//           {t("Choose a resume template or upload your own for AI analysis.")}
//         </p>

//         {/* Button Container */}
//         <div className="mt-6 flex flex-col md:flex-row gap-6">
//           {/* Resume Templates */}
//           <Link to="/templates" className="flex-1">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-green-600 hover:bg-green-800 text-white px-6 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
//             >
//               {t("Resume Templates")}
//             </motion.button>
//           </Link>

//           {/* Upload Resume */}
//           <Link to="/upload-resume" className="flex-1">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-blue-600 hover:bg-blue-900 text-white px-6 py-4 rounded-lg text-lg font-bold transition-all shadow-lg"
//             >
//               {t("Upload Your Resume")}
//             </motion.button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Dashboard;






import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaFileAlt, FaUpload } from "react-icons/fa"; // Import icons

function Dashboard() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");

  const jobRoles = ["Software Engineer", "Data Scientist", "UI/UX Designer", "Product Manager"];
  const companies = ["Google", "Microsoft", "Amazon", "Meta", "Tesla"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-3xl w-full"
      >
        <h1 className="text-4xl font-extrabold text-blue-900 animate-pulse">
          {t("AI Resume Analyzer")}
        </h1>
        <p className="text-gray-700 mt-3 text-lg font-semibold">
          {t("Choose a resume template or upload your own for AI analysis.")}
        </p>

        {/* Job Role Selection */}
        <div className="mt-6 text-gray-500">
          <label className="font-semibold text-gray-800">{t("Select Job Role:")}</label>
          <select
            className="block w-full mt-2 p-3 border rounded-lg"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          >
            <option value="">{t("-- Select Job Role --")}</option>
            {jobRoles.map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Company Selection */}
        <div className="mt-4 text-gray-500">
          <label className="font-semibold text-gray-800">{t("Select Company:")}</label>
          <select
            className="block w-full mt-2 p-3 border rounded-lg"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">{t("-- Select Company --")}</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>
        </div>

        {/* Button Container */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          {/* Resume Templates */}
          <Link to="/templates" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 hover:bg-green-800 text-white px-6 py-4 rounded-lg text-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <FaFileAlt /> {t("Resume Templates")}
            </motion.button>
          </Link>

          {/* Upload Resume */}
          <Link 
            to={{
              pathname: "/upload-resume",
              state: { jobRole, company }
            }} 
            className="flex-1"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-900 text-white px-6 py-4 rounded-lg text-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <FaUpload /> {t("Upload Your Resume")}
            </motion.button>
          </Link>
        </div>

        {/* Quick Resume Tips */}
        <div className="mt-6 bg-blue-100 p-4 rounded-lg text-gray-800 text-left">
          <h3 className="text-lg font-bold">📌 Quick Resume Tips:</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Use clear and concise formatting.</li>
            <li>Highlight key skills relevant to the job role.</li>
            <li>Ensure your resume is under two pages.</li>
            <li>Include quantifiable achievements in experience section.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Dashboard;
