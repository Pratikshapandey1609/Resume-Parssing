import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";
import Review from "./components/Pages/Review";
import Dashboard from "./components/Pages/Dashboard";
import Settings from "./components/Pages/Settings";
import Templates from "./components/Pages/Templates";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import Home from "./components/Navbar/Home";
import UserGuidePage from "./components/Pages/UserGuide";



// Context for Dark Mode 
export const ThemeContext = createContext();

function App() {
  // Get Dark Mode preference from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Store Dark Mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    // Add/remove dark class to HTML tag
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        {/* Apply dark mode to the entire app */}
        <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
          <div className="flex">
            {/* Sidebar Always Visible */}
            <Sidebar />
            {/* Main Content Area */}
            <div className="flex-1 p-6">
              {/* Page Routing */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/review" element={<Review />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/settings/*" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/user-guide" element={<UserGuidePage />} />

              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
