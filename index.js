const express = require("express");
const dbConnect = require("./config/dbConnect");
// const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const mainRoute = require("./routes/mainRoute")
const cors = require("cors")

// const apiProxy = createProxyMiddleware('/api', {
//     target: 'https://todo-backend-p60w.onrender.com',
//     changeOrigin: true,
//   });
//   app.use(apiProxy);
app.use(express.json())
app.use(cors())

app.use('/user', mainRoute)


app.listen(5000,()=>{
    console.log('server is running on port 5000')
    dbConnect();
})
