require("dotenv").config() //dot env files import

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const recipeRoutes = require("./routes/recipes")
const profileRoutes = require("./routes/profiles")

//express app
const app = express()

//middleware. Prints out info about incoming requests
app.use(express.json())

//cors middleware to allow requests from client
app.use(cors({
   origin: "https://recipe-finder-client.onrender.com"
 }))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/api/recipes", recipeRoutes)
app.use("/", profileRoutes)

// db connection
mongoose
  .connect(process.env.MONGO_ATLAS)
  .then(() => {
    //listen for requests on port
    app.listen(process.env.PORT, () => {
      console.log(
        "db is connected & server are running on port :",
        process.env.PORT
      )
    })
  })
  .catch((error) => {
    console.log(error)
  })
