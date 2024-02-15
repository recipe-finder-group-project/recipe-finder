const Recipe = require("../models/recipeModel")
const mongoose = require("mongoose")

//get all recipes
const getAllRecipes = async (req, res) => {
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

// Later on make reusable code that requests dietType + mealCategory directly
// to avoid code duplication

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

const getVeganBreakfastRecipes = async (req, res) => {
  const recipes = await Recipe.find({
    dietType: "Vegan",
    mealCategory: "Breakfast",
  })

  if (!recipes) {
    return res
      .status(404)
      .json({ error: "Vegan Breakfast Recipes not found. 404" })
  }

  res.status(200).json(recipes)
}

const getVeganLunchRecipes = async (req, res) => {
  const recipes = await Recipe.find({
    dietType: "Vegan",
    mealCategory: "Lunch",
  })

  if (!recipes) {
    return res.status(404).json({ error: "Vegan Lunch Recipes not found. 404" })
  }

  res.status(200).json(recipes)
}

const getVeganDinnerRecipes = async (req, res) => {
  const recipes = await Recipe.find({
    dietType: "Vegan",
    mealCategory: "Dinner",
  })

  if (!recipes) {
    return res
      .status(404)
      .json({ error: "Vegan Dinner Recipes not found. 404" })
  }

  res.status(200).json(recipes)
}

const getVeganSnackRecipes = async (req, res) => {
  const recipes = await Recipe.find({
    dietType: "Vegan",
    mealCategory: "Lunch",
  })

  if (!recipes) {
    return res.status(404).json({ error: "Vegan Snack Recipes not found. 404" })
  }

  res.status(200).json(recipes)
}

const getMediBreakfast = async (req, res) => {
  const recipes = await Recipe.find({
    dietType: "Mediterranean",
    mealCategory: "Breakfast",
  })

  if (!recipes) {
    return res
      .status(404)
      .json({ error: "Mediterranean Breakfast Recipes not found. 404" })
  }

  res.status(200).json(recipes)
}

const getVegetarianSnack = async (req, res) => {
  const recipes = await Recipe.find({
    dietType: "Vegetarian",
    mealCategory: "Snack",
  })

  if (!recipes) {
    return res
      .status(404)
      .json({ error: "Vegetarian Snack Recipes not found. 404" })
  }

  res.status(200).json(recipes)
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
  getRecipe,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  getRecipes,
  getVeganBreakfastRecipes,
  getVeganLunchRecipes,
  getVeganDinnerRecipes,
  getVeganSnackRecipes,
  getMediBreakfast,
  getVegetarianSnack,
}
