var fs =require("fs")
//第一个参数是文件的路径
//第二个参数是文件内容
//第三个参数是回调函数
fs.writeFile('./writeFile.txt', "大家好我是nodejs",function(error){
    console.log("运行成功")
})