import axios from "axios";

export const handleSignup = async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
  
      console.log("Signup Success:", res.data.message || "User created successfully");
      return res.data;
    } catch (err) {
      console.error("Error during signup:", err);
  
      if (err.response) {
        
        console.log("Backend Error:", err.response.data);
      } else if (err.request) {
        
        console.log("Request Error:", err.request);
      } else {
        
        console.log("Error:", err.message);
      }
  
      const errorMessage = err.response?.data?.message || "Signup failed. Please try again.";
      console.log(errorMessage);
  
      
      throw new Error(errorMessage);
    }
  };
  