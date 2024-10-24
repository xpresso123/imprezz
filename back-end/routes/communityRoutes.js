const express = require("express");
const communityController = require("../controllers/communityController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", protect, communityController.createCommunity);
router.post("/:id/follow", protect, communityController.followCommunity);

module.exports = router;
