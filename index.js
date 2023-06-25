const express = require("express");
const dbConnect = require("./config/dbConnect");


const app = express();
const mainRoute = require("./routes/mainRoute")
const cors = require("cors")


app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use('/api/user', mainRoute)


app.listen(5000,async()=>{
    await dbConnect();
    console.log('server is running on port 5000')
  
})
