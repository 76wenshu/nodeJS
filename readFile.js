//先引入的是核心模块
//之后使用核心模块的API进行数据的读取和使用
var fs = require("fs")
//回调函数
//第一个参数是文件路径
//第二个参数是回调函数（error，data）
//当数据返回成功的时候 error是null data返回成功数据
//当数据返回失败的时候 error是错误对象 data返回null

fs.readFile("./nodeFile.txt",function(error,data){
    console.log(error)//null
    //文件中都是0和1 node 将二进制转化成16进制的字符
    console.log(data)//<Buffer 09 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73>
    //用toString（）就能将16进制数字转化成正常文件
    console.log(data.toString())
})
