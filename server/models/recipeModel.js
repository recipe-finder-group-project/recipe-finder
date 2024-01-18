const mongoose = require("mongoose")

const Schema = mongoose.Schema

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dietType: {
      type: String,
      required: true,
    },
    mealCategory: {
      type: String,
      required: true,
    },
    preparationTime: {
      type: Number,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    reviews: [
      {
        userEmail: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        }
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model("Recipe", recipeSchema)
