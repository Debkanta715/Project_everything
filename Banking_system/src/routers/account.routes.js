const express = require("express");
const authmiddleware = require("../middlewares/auth.middleware");
const accountcontroller = require("../controllers/account.controller");

const router = express.Router();

//crate a new account
router.post("/", authmiddleware.authmiddleware, accountcontroller);

module.exports = router;
