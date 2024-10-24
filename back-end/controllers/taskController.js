const Task = require("../models/task");

// Create Task
// req : title, description, media, communityId, xpReward
// res : task
exports.createTask = async (req, res) => {
  const { title, description, media, communityId, xpReward } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      media,
      community: communityId,
      xpReward,
    });

    res.status(201).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Submit Task Proof
// req : proof
// res : message
exports.submitTaskProof = async (req, res) => {
  const { proof } = req.body;

  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.submissions.push({
      user: req.user._id,
      proof,
    });

    await task.save();
    res.status(200).json({ message: "Proof submitted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
