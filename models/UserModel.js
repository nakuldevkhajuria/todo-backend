const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        required:true,
        unique:true,
        type:Number
    }

})

userSchema.pre('save', async function(next){
    const salt =10
    this.password = await bcrypt.hash(this.password,salt) 
    next();
} )


userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


module.exports = mongoose.model("User",userSchema)
