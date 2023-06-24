const express = require("express");
const dbConnect = require("./config/dbConnect");


const app = express();
const mainRoute = require("./routes/mainRoute")
const cors = require("cors")


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"*"
}))
app.get('/',(req,res)=>{
    res.send('helo')
})

app.use('/user', mainRoute)


app.listen(5000,async()=>{
    console.log('server is running on port 5000')
    await dbConnect();
})
