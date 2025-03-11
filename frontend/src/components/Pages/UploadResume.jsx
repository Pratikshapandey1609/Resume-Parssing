import React, { useState } from "react";
import { Link } from "react-router-dom";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  const jobRoles = ["Software Engineer", "Data Scientist", "UI/UX Designer", "Product Manager"];
  const companies = ["Google", "Microsoft", "Amazon", "Meta", "Tesla"];

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Simulating AI scoring (Random score)
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 100) + 1;
      setScore(randomScore);
      
      // Mock AI Suggestions
      setSuggestions([
        "Add more keywords relevant to the job description.",
        "Use bullet points for better readability.",
        "Ensure your resume is under two pages.",
        "Include quantifiable achievements in experience section."
      ]);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 ">Upload Your Resume</h1>

        {/* Resume Guidelines */}
        <div className="bg-blue-100 p-4 rounded-md mt-4 text-gray-700 text-left">
          <h3 className="text-lg font-bold">📌 Resume Upload Guidelines:</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Upload in PDF or DOCX format only.</li>
            <li>Make sure the resume is under 2MB.</li>
            <li>Highlight relevant skills and experiences.</li>
            <li>Use a professional format with clear sections.</li>
          </ul>
        </div>

        {/* Job Role Dropdown */}
        <div className="mt-6 text-gray-600">
          <label className="font-semibold ">Select Job Role:</label>
          <select 
            className="block  w-full mt-2 p-2 border rounded-lg"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          >
            <option value="">-- Select Job Role --</option>
            {jobRoles.map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Company Dropdown */}
        <div className="mt-4 text-gray-600">
          <label className="font-semibold">Select Company:</label>
          <select 
            className="block w-full mt-2 p-2 border rounded-lg"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">-- Select Company --</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>{company}</option>
            ))}
          </select>
        </div>

        {/* Upload File */}
        <div className="mt-6">
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileUpload}
            className="mt-2 border p-2 rounded-lg"
          />
        </div>
        {file && <p className="text-gray-600 mt-2">File: {file.name}</p>}

        {/* Resume Score & Suggestions */}
        {score !== null && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg text-left">
            <h3 className="text-lg font-bold text-green-800">✅ AI Resume Score: {score}%</h3>
            {suggestions && (
              <div className="mt-3 text-gray-500">
                <h4 className="text-md font-semibold">🔍 Suggested Improvements:</h4>
                <ul className="list-disc ml-6 mt-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Go Back Button */}
        <Link to="/" className="mt-6 inline-block">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-bold transition-all shadow-lg">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UploadResume;
