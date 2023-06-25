const express = require("express");
const { createUser, loginUser, forgetPassword } = require("../controllers/UserCtrl");

const router = express.Router();


router.post('/register',createUser)
router.post("/login",loginUser)
router.put("/:mobile",forgetPassword)

module.exports = router