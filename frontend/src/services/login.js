import axios from "axios";

const handleLogin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
  
      localStorage.setItem("token", res.data.token);
      console.log("Token received:", res.data.token);
      
      return res.data;
    } catch (err) {
      console.error("Login failed with error:", err);
      throw new Error(err.response?.data?.error || "Login failed");
    }
  };
  

export default handleLogin;
