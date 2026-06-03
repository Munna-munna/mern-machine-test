const Agent = require("../models/Agent");
const bcrypt = require("bcryptjs");

const createAgent = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    const existingAgent = await Agent.findOne({
      email,
    });

    if (existingAgent) {
      return res.status(400).json({
        success: false,
        message: "Agent already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const agent = await Agent.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      agent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();

    res.status(200).json({
      success: true,
      agents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAgent,
  getAgents,
};