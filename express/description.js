// 框架的目的就是提高效率
// 高度统一代码度
// 有很多 web 开发框架
//npm
const express = require("express")

//起服务 hrrp.createdServer()
var app = express();
app.use('/public/',express.static("./public/"))

app.get('/',(request,response)=>{
    response.send('hello world')
})
app.get('/index',(request,response)=>{
    response.send('hello index')
})
app.listen(3000,()=>{
    console.log(" run server ....")
})