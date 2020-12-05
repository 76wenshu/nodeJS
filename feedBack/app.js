// 将引进的文件放在上边进行引进
// 所有的html 文件放在views中
// 所有的静态资源文件放在 public 中第三方资源

// 那些资源是否让用户访问，我可以通过代码非常灵活的进行，进行控制。

// 前后端融汇贯通，将就是为所欲为，集互联网于大成者，完成软件的得心应手的开发，转战业务
const http = require('http')
const fs = require('fs')

http
    .createServer((request,respose)=>{
        // respose.end('hello')
        const url = request.url
        if(url === '/'){
            fs.readFile('./views/index.html',(err,data)=>{
                if(err){
                    fs.readFile('./views/err404.html',(err,data)=>{
                        if(err){
                            console.log('404 Not Found')
                        }else{
                            respose.end(data)
                        }
                    })
                }else{
                    respose.end(data)
                }
            })
        }else if(url ==='/post'){
            fs.readFile('./views/post.html',(err,data)=>{
                if(err){
                    fs.readFile('./views/err404.html',(err,data)=>{
                        if(err){
                            console.log('404 Not Found')
                        }else{
                            respose.end(data)
                        }
                    })
                }else{
                    respose.end(data)
                }
            })

        }else if(url.indexOf('/public/')===0){
            // '/'是根路径的 意思
            console.log(url)
            fs.readFile('./' + url,(err,data) =>{
                if(err){
                    console.log(' 404 No Found.')
                }else{
                    respose.end(data)
                }
            })
        }else{
            //其他的处理成404 都是可以处理的 
            fs.readFile('./views/err404.html',(err,data)=>{
                if(err){
                    console.log('404 Not Found')
                }else{
                    respose.end(data)
                }
            })
        }

    })
    .listen(3000, ()=>{
        console.log(' run server ...')
    })