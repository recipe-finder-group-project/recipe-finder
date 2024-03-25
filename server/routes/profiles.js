const express = require("express")

const { createProfile, saveRecipe, removeRecipe, getSavedRecipes } = require("../controllers/profileController")

const router = express.Router()

router.post("/save-user-data", createProfile)

router.post("/add-to-favorites", saveRecipe)

router.delete("/remove-from-favorites", removeRecipe)

router.post("/get-favorites", getSavedRecipes)

module.exports = router;
