const express = require("express")

const { createProfile } = require("../controllers/profileController")

const router = express.Router()

router.post("/save-user-data", createProfile)

module.exports = router