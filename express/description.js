// 在开发中还是使用express 框架就是再开发中的一种工具能让开发更简单一些，但还是归根结底自己还是要懂得原理的基础上进行快速的开发


// 框架的目的就是提高效率
// 高度统一代码度
// 有很多 web 开发框架
//nodemon 可以自动进行服务器重启不用平凡的修改引用服务
const express = require("express")

//起服务 hrrp.createdServer()
var app = express();
// 请求静态资源
// 当省用第一个参数的时候在路由中就不用添加public来进行使用，加上静态资源的路径名反而是不可以

// http://127.0.0.1:3000/public/text/text
// app.use('/public/',express.static("./public/"))

// http://127.0.0.1:3000/text/text
app.use(express.static("./public/"))

// /a/我们可以看做是/public/的别名
// http://127.0.0.1:3000/a/text/text
// app.use('/a/',express.static("./public/"))

app.get('/',(request,response)=>{
    response.send('hello world')
})
app.get('/index',(request,response)=>{
    response.send('hello lain')
})
app.listen(3000,()=>{
    console.log(" run server ....")
})