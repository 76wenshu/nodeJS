var fs =require("fs")
//第一个参数是文件的路径
//第二个参数是文件内容
//第三个参数是回调函数
fs.writeFile('./nih1.txt', "大家好我是nodejs",function(error){
    
    if(error){
        console.log("书写失败")
        console.log(error)
    }else{
        console.log("书写成功")
    }
})
//引用核心http模块
var http = require("http");
//创建服务
var server = http.createServer()
server.on("request",function(request,response){
    debugger
    // console.log(request)
    // console.log(response)
    console.log(request.url)
    if(request.url==='/'){
        response.write("into")
    }
    if(request.url==='/a'){
        response.write("hello")
    }
    
    response.end()
})
//绑定端口号
//在服务开始的时候https://127.0.0.1:8000因为使用的htts所以chrome是报连接服务不安全,连接不上服务器
//所以问题碍于https所以不用使用https只能使用http
server.listen(8000,function(){
    console.log('chenggong')
})