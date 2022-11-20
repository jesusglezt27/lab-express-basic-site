
const express = require("express"); 


const app = express(); 

app.use(express.static("public"))


app.get("/",(req,res,next)=>{
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
</head>
<body>
    <h1>INICIO</h1>
    <div>
    <a href="http://localhost:3000/about">ABOUT</a>
    </div>
    <div>
    <a href="http://localhost:3000/works">WORKS</a>
    </div>
    <a href="http://localhost:3000/gallery">GALLERY</a>
    </div>
</body>
</html>
    `)
})

app.get("/about",(req,res,next)=>{
    res.sendFile(__dirname + "/public/views/about.html")
})


app.get("/works",(req,res,next)=>{
    res.sendFile(__dirname + "/public/views/works.html") 
})

app.get("/gallery",(req,res,next)=>{
    res.sendFile(__dirname + "/public/views/gallery.html") 
})

app.listen(3000,()=>{
    console.log('funcionando en el 3000')
})
