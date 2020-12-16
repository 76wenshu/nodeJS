const express = require("express")
const router = require("./router.js")
var body = require("body-parser")
const app = express()

app.engine("html", require("express-art-template"))
app.use("/node_modules/",express.static("./node_modules/"))
app.use("/public/",express.static("./public/"))

app.use(body.urlencoded({extended:false}))
app.use(body.json())

app.use(router)


app.listen(3000, ()=>{
    console.log(" run server 3000 ....")
})
