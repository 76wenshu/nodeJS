//每一个模块都有自己单独的作用域(当前文件内部有效)
//require 加载  能拿到加载文件的导出对象exports 默认是null
console.log("model start")
const model = require("./first")
console.log(model)
console.log("model end")
//ip地址和端口号
//ip 地址是计算机的唯一标识，
//端口号计算中是软件应用的唯一标识