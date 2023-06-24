const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
const mainRoute = require("./routes/mainRoute")
const cors = require("cors")


app.use(express.json())
app.use(cors())
app.use('/api/user', mainRoute)


app.listen(5000,()=>{
    console.log('server is running on port 5000')
    dbConnect();
})
