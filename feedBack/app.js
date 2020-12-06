// 将引进的文件放在上边进行引进
// 所有的html 文件放在views中
// 所有的静态资源文件放在 public 中第三方资源

// 那些资源是否让用户访问，我可以通过代码非常灵活的进行，进行控制。

// 前后端融汇贯通，将就是为所欲为，集互联网于大成者，完成软件的得心应手的开发，转战业务

const http = require('http')
const fs = require('fs')
const Url = require('url')

// 在使用中我们使用模板引擎 
const temeplates  = require('art-template')

 
//展示数据
let comments = [{
    name:"76wenshu",
    message:'zhgebucuo',
    dateTime:'2020-12-05'
},{
    name:"76wenshu",
    message:'zhgebucuo',
    dateTime:'2020-12-05'
}]

http
    .createServer((request,respose)=>{
        const queryObj = Url.parse(request.url,true)
        console.log(queryObj)
        // respose.end('hello')
        // const pathName = request.pathName
        //获取单独不包含查询字符串的路径部分
        const pathName = queryObj.pathname
        if(pathName === '/'){
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
                    const htmlStr = temeplates.render(data.toString(),{
                        comment:comments
                    })
                    respose.end(htmlStr)
                }
            })
        }else if(pathName ==='/post'){
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

        }else if(pathName.indexOf('/public/')===0){
            // '/'是根路径的 意思
            console.log(pathName)
            fs.readFile('./' + pathName,(err,data) =>{
                if(err){
                    console.log(' 404 No Found.')
                }else{
                    respose.end(data)
                }
            })
        }else if(pathName ==='/pinglun'){
            console.log(queryObj.query)
            // respose.end(JSON.stringify(queryObj.query))
            const comment = queryObj.query;
            comment.dataTime = '2020-12-05';
            comments.push(comment)
            //数据已经存储好（不是持久化数据）
            //重定向到首页 
            //重定向那个code就是302(暂时重定向)
            respose.statusCode=302
            respose.setHeader('Location','/') 
            respose.end()
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


    // Node 不是特别 适合入门服务端 只有基础，太灵活的（js）的问题
    
    // Java PHP 就坡度不陡  

    // node js 自定义的函数能够快速的进行