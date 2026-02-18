const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/auth.routes");

// Connect Database
connectDB();

// Create Express App
const app = express();

/* ===============================
   Middlewares
================================= */

// Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    credentials: true,
  })
);

// Parse JSON
app.use(express.json());

/* ===============================
   Routes
================================= */

app.use("/api/auth", authRoutes);

/* ===============================
   Health Check Route (Optional but Good)
================================= */

app.get("/", (req, res) => {
  res.send("LMS Backend Running ✅");
});

module.exports = app;
