const XLSX = require("xlsx");
const Agent = require("../models/Agent");
const Task = require("../models/Task");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File not uploaded",
      });
    }

    const workbook = XLSX.readFile(req.file.path);

    const sheet =
      workbook.Sheets[workbook.SheetNames[0]];

    const rows = XLSX.utils.sheet_to_json(sheet);

    const agents = await Agent.find();

    if (agents.length !== 5) {
      return res.status(400).json({
        success: false,
        message: "Exactly 5 agents required",
      });
    }

    // Remove old tasks before new upload
    await Task.deleteMany({});

    for (let i = 0; i < rows.length; i++) {
      const assignedAgent =
        agents[i % agents.length];

      await Task.create({
        firstName:
          rows[i].FirstName ||
          rows[i].firstname,

        phone:
          rows[i].Phone ||
          rows[i].phone,

        notes:
          rows[i].Notes ||
          rows[i].notes,

        agent: assignedAgent._id,
      });
    }

    res.status(200).json({
      success: true,
      totalRecords: rows.length,
      message: "Tasks distributed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("agent", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadFile,
  getTasks,
};