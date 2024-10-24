const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  coverImg: { type: String },
  icon: { type: String },
  category: { type: String, required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
