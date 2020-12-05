const http = require('http');
const fs = require('fs');

const server = http.createServer()
server.on('request',(request,response)=>{
    let url;
    const routeDir = './www'
    if(request.url === "/"){
         url = '/index.html' 
    }else{
         url = request.url;
    }

    fs.readFile(routeDir + url,(err,data)=>{
        if(err){
            console.log(routeDir + '/html404.html')
            fs.readFile(routeDir + '/html404.html',(err,data)=>{
                if(err){
                    console.log('success')
                }
                response.end(data)
            })
        }else{
            response.setHeader('Content-Type', 'text/plain; charset=utf-8'); 
            response.end(data)
        }
    })
})

server.listen(3000,(err)=>{
    console.log(' Run Server ...... ')
})