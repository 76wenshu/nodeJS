//每一个模块都有自己单独的作用域(当前文件内部有效)
//require 加载  能拿到加载文件的导出对象exports 默认是null
console.log("model start")
const model = require("./first")
console.log(model)
console.log("model end")