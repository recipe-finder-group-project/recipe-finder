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
    image:{
      type: String,
      required: true,
    },
    preparation:{
      type: Array,
      required: true,
    },
    reviews: [ 
      //fix it later, cause it makes the email & rating itself not required for adding the comment
      //as an option we may just use validation to avoid most of the common issues
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
