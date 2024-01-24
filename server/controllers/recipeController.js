const Recipe = require("../models/recipeModel")
const mongoose = require("mongoose")

//get all recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({ createdAt: -1 })

  res.status(200).json(recipes)
}

// get a single recipe by id
/// later on i will change it to the name for convenience
const getRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe" })
  }

  const recipe = await Recipe.findById(id)

  if (!recipe) {
    return res.status(404).json({ error: "No such recipe" })
  }

  res.status(200).json(recipe)
}

//create new recipe
const createRecipe = async (req, res) => {
  const {
    name,
    dietType,
    mealCategory,
    preparationTime,
    difficulty,
    ingredients,
    reviews,
  } = req.body

  // add to the database
  try {
    const recipe = await Recipe.create({
      name,
      dietType,
      mealCategory,
      preparationTime,
      difficulty,
      ingredients,
      reviews,
    })
    res.status(200).json(recipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a recipe by id
const deleteRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such recipe" })
  }

  const recipe = await Recipe.findOneAndDelete({ _id: id })

  if (!recipe) {
    return res.status(400).json({ error: "No such recipe" })
  }

  res.status(200).json(recipe)
}

// update a recipe
const updateRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such recipe" })
  }

  const recipe = await Recipe.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, //create logic to handle "reviews" change
    }
  )

  if (!recipe) {
    return res.status(400).json({ error: "No such recipe" })
  }

  res.status(200).json(recipe)
}

module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
}
