const express = require("express");
const { createUser, loginUser, forgetPassword } = require("../controllers/UserCtrl");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hi htis is home')
})

router.post('/register',createUser)
router.post("/login",loginUser)
router.put("/:mobile",forgetPassword)

module.exports = router