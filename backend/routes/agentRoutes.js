const express = require("express");
const router = express.Router();

const Agent = require("../models/Agent");
const protect = require("../middleware/authMiddleware");

// CREATE AGENT
router.post("/", protect, async (req, res) => {
  try {
    const agent = await Agent.create(req.body);
    res.json({ success: true, agent });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL AGENTS
router.get("/", protect, async (req, res) => {
  const agents = await Agent.find();
  res.json(agents);
});

// DELETE AGENT (ADD THIS)
router.delete("/:id", protect, async (req, res) => {
  try {
    await Agent.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Agent deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;