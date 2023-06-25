
const jwt = require("jsonwebtoken")
const generateToken = (id) => {
    let secretKey = 'abajaba'
    return  jwt.sign({id}, secretKey, { expiresIn: "1d" })
}
module.exports = generateToken