const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require("multer");
const path = require("path");

const resumeRoutes = require("./routes/resumeRoutes");
const userRoutes = require('./routes/userRouter');
const connectDB = require('./config/db.js');

dotenv.config();

const app = express(); 

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/resume", resumeRoutes);
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
