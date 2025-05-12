import React from "react";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot";

import Resume2 from "/public/resume2.png";
import Resume3 from "/public/resume3.png";
import Resume4 from "/public/resume4.png";
import Resume5 from "/public/resume5.png";
import Logo from "/public/TalentFlux1.png";

const resumeTemplates = [
  
  {
    id: 1,
    name: "Corporate Resume",
    description: "Ideal for business professionals and executives.",
    image: Resume4,
    link: Resume4,
  },
  {
    id: 2,
    name: "Minimalist Resume",
    description: "A simple and clean design focused on content.",
    image: Resume3,
    link: Resume3,
  },
  {
    id: 3,
    name: "Corporate Resume",
    description: "Ideal for business professionals and executives.",
    image: Resume2,
    link: Resume2,
  },
  {
    id: 4,
    name: "Modern Resume",
    description: "A sleek and modern template with a professional touch.",
    image: Resume5,
    link: Resume5,
  },
];

const ResumeTemplates = ({ isNavbarOpen }) => {
  return (
    <section
      className={`transition-all duration-300 px-12 ${
        isNavbarOpen ? "ml-[250px]" : "ml-0"
      }`}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-6xl w-full text-center">
          {/* Header */}
          <motion.h2
            className="text-4xl font-extrabold text-gray mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          
            <div className="flex items-center justify-center gap-4 m-8">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-12 rounded-full shadow-md"
              />
              <h2 className="text-4xl font-extrabold text-blue-900">
                Best Resume Templates
              </h2>
            </div>
          </motion.h2>

          {/* Resume Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeTemplates.map((template) => (
              <motion.div
                key={template.id}
                className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-5 border border-white/20 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Template Image */}
                <img
                  src={template.image}
                  alt={template.name}
                  className="rounded-lg w-full  shadow-md"
                />

                {/* Template Info */}
                <h3 className="text-lg font-semibold text-gray  mt-4">
                  {template.name}
                </h3>
                <p className="text-gray  text-sm mt-1">
                  {template.description}
                </p>

                <div className="flex gap-4 mt-4">
                  <motion.a
                    href={template.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Preview
                  </motion.a>

                  <motion.a
                    href={template.link}
                    download
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Chatbot />
      </div>
    </section>
  );
};

export default ResumeTemplates;
