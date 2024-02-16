const Recipe = require("../models/recipeModel")
const mongoose = require("mongoose")

//get all recipes p.s/ dont use it overloads system.
const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find({}).sort({ createdAt: -1 })

  res.status(200).json(recipes)
}

//fetching recipes using react hooks
// route is: react subfilter button POST (returns @mealCategory & @dietType ->
// server/api/recipes/search (@parameters mealCategory * dietType) -> 
// MongoDB fetching the recipes by filters mentioned above ->
// react component assembles json response data
const getRecipes = async (req, res) => {
  const dietType = req.body.dietTypeFilter;
  const mealCategory = req.body.mealCategoryFilter;

  const recipes = await Recipe.find({
    dietType: dietType,
    mealCategory: mealCategory,
  })

  if (!recipes) {
    return res
      .status(404)
      .json({ error: "No recipes find for desired category" })
  }

  return res.status(200).json(recipes)
}

//create new recipe
const createRecipe = async (req, res) => {
  const {
    name,
    dietType,
    mealCategory,
    preparationTime,
    preparation,
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
      preparation,
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
  getAllRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipes,
}
