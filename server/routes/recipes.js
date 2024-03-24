const express = require("express")
const {
    getAllRecipes,
    createRecipe,
    deleteRecipe,
    updateRecipe,
    getRecipes,
    getRecipeById,
} = require('../controllers/recipeController')

const router = express.Router()

// GET all recipes
router.get("/", getAllRecipes)

// GET 1 category recipes
router.post("/search", getRecipes)

// POST a new recipe
router.post("/", createRecipe)

// DELETE a recipe
router.delete('/:id', deleteRecipe)

// UPDATE a recipe
router.patch('/:id', updateRecipe)

router.get("/:id", getRecipeById)

module.exports = router