const Profile = require("../models/profileModel")
const mongoose = require("mongoose")

const createProfile = async (req, res) => {
  const { name, email } = req.body

  // Check if a profile with the same email already exists
  try {
    const existingProfile = await Profile.findOne({ email })
    if (existingProfile) {
      return res
        .status(400)
        .json({ error: "Profile with the same email address already exists." })
    }

    // If no existing profile, proceed to save the new profile
    const newProfile = new Profile({
      name,
      email,
    })

    const savedProfile = await newProfile.save()

    console.log(JSON.stringify(savedProfile))
    res.json(savedProfile)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const saveRecipe = async (req, res) => {
  const { email, recipe } = req.body

  // Check if a profile with the same email already exists
  try {
    const profile = await Profile.findOne({ email: email })
    if (!profile) {
      return res
        .status(404)
        .json({ error: "Profile with the given email address does not exist." })
    }
    const recipe_uniqness = await Profile.findOne(
      {email: email, saved_recipes: recipe}
    )
    if(recipe_uniqness){
      return res
      .status(400)
      .json({error: "Recipe is already in favourites."})
    }

    const updatedProfile = await Profile.updateOne(
      { email: email },
      { $push: { saved_recipes: recipe } }
    )

    if (updatedProfile.modifiedCount === 0) {
      return res
        .status(400)
        .json({ error: "Could not add the recipe to the profile." })
    }

    res.json({ message: "Recipe added successfully to the profile." })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const removeRecipe = async (req, res) => {
  const { email, recipe } = req.body

  // Check if a profile with the same email already exists
  try {
    const profile = await Profile.findOne({ email: email })
    if (!profile) {
      return res
        .status(404)
        .json({ error: "Profile with the given email address does not exist." })
    }

    const updatedProfile = await Profile.updateOne(
      { email: email },
      { $pull: { saved_recipes: recipe } }
    )

    if (updatedProfile.modifiedCount === 0) {
      return res
        .status(400)
        .json({ error: "Could not remove the recipe from the profile." })
    }

    res.json({ message: "Recipe removes successfully from the profile." })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getSavedRecipes = async (req, res) => {
  const { email } = req.body

  // Check if a profile with the same email already exists
  try {
    const profile = await Profile.findOne({ email: email })
    if (!profile) {
      return res
        .status(404)
        .json({ error: "Profile with the given email address does not exist." })
    }

    const recipeIDs = await Profile.find(
      { email: email },
      { saved_recipes: 1, _id: 0 }
    )

    if (recipeIDs.modifiedCount === 0) {
      return res
        .status(400)
        .json({ error: "Could not add the recipe to the profile." })
    }

    return res.status(200).json(recipeIDs)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createProfile, saveRecipe, removeRecipe, getSavedRecipes }
