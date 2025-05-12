// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const axios = require("axios");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/chatbot", async (req, res) => {
//     const userMessage = req.body.message;

//     try {
//         const response = await axios.post(
//             "https://api.openai.com/v1/chat/completions",
//             {
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "user", content: userMessage }],
//             },
//             {
//                 headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
//             }
//         );

//         res.json({ reply: response.data.choices[0].message.content });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Failed to connect to AI chatbot" });
//     }
// });

// app.listen(5000, () =>
//     console.log("Chatbot API running on port 5000"));



import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = " https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBoliUcUGLCGYHjDMhz0AjTt0sFND6g3pM"; 
const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat() {
    try {
        // Use correct model name
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Send a test message
        const chat = model.startChat();
        const result = await chat.sendMessage("Hello, how can you help?");
        
        console.log(result.response.text()); 
    } catch (error) {
        console.error("Error:", error);
    }
}

runChat();

