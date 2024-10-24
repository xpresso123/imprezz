const express = require("express");
const taskController = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", protect, taskController.createTask);
router.post("/:taskId/submit-proof", protect, taskController.submitTaskProof);

module.exports = router;
