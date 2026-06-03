const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/authMiddleware"
);

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  uploadFile,
  getTasks,
} = require(
  "../controllers/uploadController"
);

// Upload CSV
router.post(
  "/",
  protect,
  upload.single("file"),
  uploadFile
);

// Get Distributed Tasks
router.get(
  "/",
  protect,
  getTasks
);

module.exports = router;