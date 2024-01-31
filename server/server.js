require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const recipeRoutes = require("./routes/recipes")
const cors = require("cors")


//express app
const app = express()

//middleware. Prints out info about incoming requests
app.use(express.json())

//cors middleware to allow requests from client
app.use(cors({
    origin: "https://recipe-finder-8bfu.onrender.com"
}))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/api/recipes", recipeRoutes)

// db connection
mongoose
  .connect(process.env.MONGO_ATLAS)
  .then(() => {
    //listen for requests on port
    app.listen(process.env.PORT, () => {
      console.log("db is connected & listening on port :", process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
