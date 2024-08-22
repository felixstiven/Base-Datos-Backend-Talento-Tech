const express = require("express");
require("dotenv").config()
const authorRoutes = require("./routes/author");
const { default: mongoose } = require("mongoose");



const app = express();
const port = 3006;
app.set("port",port);

app.use(express.json());
app.use("/api",authorRoutes)



app.get("/",(req,res)=>{
    res.send("hola mundo");
})

app.listen(port,()=>{
    console.log(`Intro app escuchando el puerto ${port}`)
})

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log("Base de datos conectada"))
.catch((err)=> console.log(err.message))