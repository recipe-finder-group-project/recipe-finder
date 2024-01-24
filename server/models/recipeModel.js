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
    reviews: [ //fix it, cause it makes reviews necessary, while it is optional
      {
        userEmail: {
          type: String,
          required: false,
        },
        comment: {
          type: String,
          required: false,
        },
        rating: {
          type: Number,
          required: false,
        }
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model("Recipe", recipeSchema)
