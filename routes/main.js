const express = require("express")
const router = express.Router()

const {login, dashboard} = require("../controllers/main")

const authMidlleware = require("../middleware/auth")

router.get("/dashboard",authMidlleware,dashboard)
router.post("/login", login)


module.exports = router