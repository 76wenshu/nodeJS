
//  launch 中的在项目没有运行的时候进行调试
// 相当于本地调试
// class Person{
        
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getName(){
//         const name =  this.firstName + this.lastName;
//         console.log(name)
//         return name;
//     }
// }
// const person = new Person("文","书")

// const name = person.getName()
// console.log(name)

// 相当于在有的web服务是不能够停止的还能再运行中调试，所以只能使用attch进行调试
// const http = require("http");

// http.createServer((request,response)=>{
//     let  name;
//     if(request.url=== '/'){
//          name = "76文书"
//         console.log(name)
//     }
//     response.setHeader("Content-Type","text/plain;charset=utf-8");
//     response.end(name)
// }).listen(3000,()=>{
//     console.log(" run server 3000 ...")
// })


