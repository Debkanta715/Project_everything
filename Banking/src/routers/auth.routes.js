const express = require("express");
const controllers = require("../controllers/auth.controllers");
const router = express.Router();

router.post("/register", controllers.userregistration);
router.post("/login", controllers.login);

module.exports = router;
