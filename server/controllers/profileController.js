const Profile = require("../models/profileModel")
const mongoose = require("mongoose")

const createProfile = async (req, res) => {
  const {
    name,
    email
  } = req.body

  // add to the database
  try {
    const newProfile = new Profile({
        name,
        email,
    });

    const savedProfile = await newProfile.save();

    console.log(JSON.stringify(savedProfile))
    res.json(savedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createProfile
}
