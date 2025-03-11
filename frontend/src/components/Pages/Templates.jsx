import React from "react";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot";

const resumeTemplates = [
  {
    id: 1,
    name: "Modern Resume",
    description: "A sleek and modern template with a professional touch.",
    image: "/assets/resume1.png",
    link: "/templates/resume1.pdf",
  },
  {
    id: 2,
    name: "Creative Resume",
    description: "Perfect for designers and creatives with a unique layout.",
    image: "/assets/resume2.png",
    link: "/templates/resume2.pdf",
  },
  {
    id: 3,
    name: "Minimalist Resume",
    description: "A simple and clean design focused on content.",
    image: "/assets/resume3.png",
    link: "/templates/resume3.pdf",
  },
  {
    id: 4,
    name: "Corporate Resume",
    description: "Ideal for business professionals and executives.",
    image: "/assets/resume4.png",
    link: "/templates/resume4.pdf",
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
            📄 Best Resume Templates
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
                  className="rounded-lg w-full h-48 object-cover shadow-md"
                />

                {/* Template Info */}
                <h3 className="text-lg font-semibold text-gray  mt-4">
                  {template.name}
                </h3>
                <p className="text-gray  text-sm mt-1">
                  {template.description}
                </p>

                {/* Download Button */}
                <motion.a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-6 rounded-full shadow-md hover:scale-105 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  Preview / Download
                </motion.a>
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
