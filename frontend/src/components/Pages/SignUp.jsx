import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Chatbot from "../Chatbot";
import { handleSignup } from "../../services/signup"; // Import handleSignup

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      // Call handleSignup function
      const res = await handleSignup(formData.fullName, formData.email, formData.password);
      
      if (res) {
        alert("Signup successful! Redirecting to login...");
        // You can navigate to the login page after successful signup
      }
    } catch (err) {
      alert("Signup failed! Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="p-10 rounded-2xl shadow-2xl backdrop-blur-md text-center max-w-lg w-full"
        >
          <h2 className="text-3xl font-bold text-blue-900">Create an Account</h2>
          <p className="text-gray text-lg mt-2">Sign up to access TalentFlux</p>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="mt-6 text-black space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Signup Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-lg text-lg font-bold transition-all shadow-lg"
            >
              Sign Up
            </motion.button>
          </form>

          {/* Redirect to Login */}
          <p className="mt-4 text-gray">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 font-bold">
              Log In
            </Link>
          </p>
        </motion.div>
      </div>

      <Chatbot />
    </div>
  );
}

export default SignUp;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Chatbot from "../Chatbot";
// function SignUp() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("User Data:", formData);
//   };

//   return (
//     <div className="flex "> {/** bg-gradient-to-r from-[#1e4972] to-[#8f982a] */}
//       {/* Main Content */}
//       <div className="flex-1 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className=" p-10 rounded-2xl shadow-2xl backdrop-blur-md text-center max-w-lg w-full"
//         >
//           <h2 className="text-3xl font-bold text-blue-900">Create an Account</h2>
//           <p className="text-gray text-lg  mt-2">Sign up to access TalentFlux</p>

//           {/* Signup Form */}
//           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />

//             {/* Signup Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-lg text-lg font-bold transition-all shadow-lg"
//             >
//               Sign Up
//             </motion.button>
//           </form>

//           {/* Redirect to Login */}
//           <p className="mt-4 text-gray">
//             Already have an account?{" "}
//             <Link to="/login" className="text-yellow-500  font-bold">
//               Log In
//             </Link>
//           </p>
//         </motion.div>
//       </div>

//       <Chatbot />
      
//     </div>
//   );
// }

// export default SignUp;




