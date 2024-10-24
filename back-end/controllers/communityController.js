const Community = require("../models/community");
const User = require("../models/user");

// Create Community
// req : name, description, coverImg, icon, category
// res : community
exports.createCommunity = async (req, res) => {
  const { name, description, coverImg, icon, category } = req.body;

  try {
    const community = await Community.create({
      name,
      description,
      coverImg,
      icon,
      category,
      admin: req.user._id,
    });

    res.status(201).json(community);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Follow Community
// req : id
// res : message
exports.followCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      return res.status(404).json({ message: "Community not found" });
    }

    const user = await User.findById(req.user._id);
    if (user.communities.includes(community._id)) {
      return res.status(400).json({ message: "Already following community" });
    }

    user.communities.push(community._id);
    community.followers.push(req.user._id);
    await user.save();
    await community.save();

    res.json({ message: "Community followed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
