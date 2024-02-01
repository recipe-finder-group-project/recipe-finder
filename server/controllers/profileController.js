const Profile = require("../models/profileModel");
const mongoose = require("mongoose");

const createProfile = async (req, res) => {
  const { name, email } = req.body;

  // Check if a profile with the same email already exists
  try {
    const existingProfile = await Profile.findOne({ email });
    if (existingProfile) {
      return res.status(400).json({ error: "Profile with the same email address already exists." });
    }

    // If no existing profile, proceed to save the new profile
    const newProfile = new Profile({
      name,
      email,
    });

    const savedProfile = await newProfile.save();

    console.log(JSON.stringify(savedProfile));
    res.json(savedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProfile,
};
