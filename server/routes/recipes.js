const express = require("express")
const {
    getAllRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe,
    getRecipes,
    getVeganLunchRecipes,
    getMediBreakfast,
    getVegetarianSnack,
} = require('../controllers/recipeController')

const router = express.Router()

// GET all recipes
router.get("/", getAllRecipes)

// GET 1 category recipes
router.get("/:filter", getRecipes)

// GET a single recipe
router.get("/search/:id", getRecipe)

// GET vegan lunch recipes
router.get("/veganlunch", getVeganLunchRecipes)

router.get("/medibreakfast", getMediBreakfast)

router.get("/vegetariansnack", getVegetarianSnack)

// POST a new recipe
router.post("/", createRecipe)

// DELETE a recipe
router.delete('/:id', deleteRecipe)

// UPDATE a recipe
router.patch('/:id', updateRecipe)

module.exports = router