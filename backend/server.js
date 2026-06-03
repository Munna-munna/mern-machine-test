require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const agentRoutes = require("./routes/agentRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/upload", uploadRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});