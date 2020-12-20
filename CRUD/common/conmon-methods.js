
var fs = require("fs");

exports.find = function(path, callBack){
    fs.readFile(path, "utf8", (err, data)=> {
        if(err){
            return res.status(500).send("Sever error")
        }
        var languageData =JSON.parse(data).data;
        callBack(languageData)
    })
}