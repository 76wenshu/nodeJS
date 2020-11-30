const http = require('http')
const fs = require('fs')
//在当前文件夹内进行文件的启动运行
const sever = http.createServer();
sever.on('request',(request,response)=>{
    if(request.url === '/'){
        fs.readFile('./resources/index.html',(err,data)=>{
            if(err){
                console.log('读取文件失败了')
            }else{
                response.setHeader('Content-Type',"text/html;chaeset = utf-8")
                response.end(data)
            }
        });
    }
})
sever.listen(8080,()=>{
    console.log("sever run ....")
})