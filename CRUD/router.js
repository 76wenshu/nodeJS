
var express = require("express");
var router = express.Router();

var fs = require("fs")


router.get("/language",(req, res)=>{
    fs.readFile("./language.json", "utf8", (err, data)=> {
        if(err){
            return res.status(500).send("Sever error")
        }
        var languageData =JSON.parse(data).data;
        res.render("index.html", {
            data: languageData
        })
    })
})
router.get("/created",(req, res)=>{
        res.render("created.html")
})
router.post("/created",(req, res)=>{
    fs.readFile("./language.json", "utf8", (err, data)=> {
        if(err){
            return res.status(500).send("Sever error")
        }
        var languageData =JSON.parse(data).data;
        languageData.push(req.body)
        var fileDate =  JSON.stringify({
            data:languageData
        }) 
        fs.writeFile("./language.json",fileDate, (err)=>{
            if(err){
                console.log("文件写入错误")
            }else{
                res.redirect("/language")
            }
        })
    })
})

module.exports = router
