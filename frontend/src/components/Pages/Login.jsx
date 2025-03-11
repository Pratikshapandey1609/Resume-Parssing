import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../Navbar/Sidebar";
import Chatbot from "../Chatbot";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = email === "user@example.com" && password === "password123";

    if (userExists) {
      alert("Login Successful! Redirecting...");
      navigate("/dashboard");
    } else {
      alert("User not found! Redirecting to Signup...");
      navigate("/signup");
    }
  };

  return (
    <div className="flex h-screen  "> {/**bg-gradient-to-r from-[#1e4972] to-[#8f982a]**/}
      

      <div className="flex-1 flex items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
           className="  backdrop-blur-lg p-8 rounded-lg shadow-xl w-full max-w-md text-center border border-white/30"
        >
          <h2 className="text-4xl font-bold text-gray font-sans mb-6">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-md bg-white/30 focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-800"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-500 rounded-md bg-white/30 focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-800"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-gray py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-800 transition-all"
            >
              Login
            </motion.button>
          </form>

          <p className="mt-4 text-gray">
            Don't have an account?{" "}
            <Link to="/signup" className="text-yellow-500 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>

      <Chatbot />

    </div>
  );
}


export default Login;

