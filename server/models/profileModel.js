const mongoose = require("mongoose")

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required:true,
  },
  saved_recipes: {
    type: Array,
    required: false,
  }
})

module.exports = mongoose.model("Profile", profileSchema)
