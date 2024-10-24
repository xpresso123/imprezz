const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  media: { type: String },
  community: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
  status: { type: String, enum: ["active", "closed"], default: "active" },
  xpReward: { type: Number, default: 10 },
  submissions: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      proof: { type: String },
      verified: { type: Boolean, default: false },
    },
  ],
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
