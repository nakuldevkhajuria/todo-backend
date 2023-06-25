const generateToken = require('../config/Jwt');
const userModel = require('../models/UserModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require("bcrypt")


const createUser = asyncHandler(
    async(req,res)=>{
        const email = req.body.email;
        
        const findUser = await userModel.findOne({email:email})
        
        if(!findUser){
            const user = await userModel.create(req.body)
            res.send(user)
        }
        else{
            throw new Error("user already exists")
        }
        }
)
const loginUser = asyncHandler(
    async (req,res)=>{
const email = req.body.email;
const enteredPassword = req.body.password;

const findUser = await userModel.findOne({email});

if( findUser  && (await findUser.isPasswordMatched(enteredPassword))){
    res.json({
        _id: findUser._id,
        name:findUser.name,
        email: findUser.email,
       token:generateToken(findUser._id)
        // token: generateToken(findUser._id)
    })
}
else{
    throw new Error("invalid credentials")
}

}
)

const forgetPassword = asyncHandler(
    async function (req, res) {

    const { mobile } = req.params;
  const { password } = req.body;

  try {

    const user = await userModel.findOne({ mobile });

    if (!user) {
      return res.json({ message: 'This Mobile number is not registered' });
    }

    // Update the user's password using userModel's password hashing
    user.password = password;
    await user.save();

    res.json({ message: 'Password has been changed successfully' });
  } catch (error) {
    throw new Error(error);
  }
    }
)




module.exports ={createUser,loginUser,forgetPassword}