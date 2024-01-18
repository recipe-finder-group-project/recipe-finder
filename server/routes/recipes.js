const express = require("express")
const Recipe = require("../models/recipeModel")

const router = express.Router()

// GET all recipes
router.get("/", (req, res) => {
  res.json({ mssg: "GET all recipes" })
})

// GET a single recipe
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single recipe" })
})

// POST a new recipe
router.post("/", async (req, res) => {
  const { name, dietType, mealCategory, preparationTime, difficulty, ingredients, reviews} = req.body

  try {
    const recipe = await Recipe.create({ name, dietType, mealCategory, preparationTime, difficulty, ingredients, reviews})
    res.status(200).json(recipe)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
// DELETE a recipe
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a recipe'})
  })
  
  // UPDATE a recipe
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a recipe by id'})
  })
  
  module.exports = router