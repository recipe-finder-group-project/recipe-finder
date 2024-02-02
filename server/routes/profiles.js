const express = require("express")

const { createProfile } = require("../controllers/profileController")

const router = express.Router()

router.post("/", createProfile)

module.exports = router;