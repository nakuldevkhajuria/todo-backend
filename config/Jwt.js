
const jwt = require("jsonwebtoken")
const generateToken = async(id) => {
    let secretKey = 'abajaba'
    return await jwt.sign({id}, secretKey, { expiresIn: "1d" })
}
module.exports = generateToken