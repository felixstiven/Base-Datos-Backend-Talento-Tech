const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config(0)

const routerEstudiantes = require("./routes/estudiante")
const app = express()
const port = 3005 

app.set("port",port)

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=> console.log ("Conectado a la BD"))
.catch((err)=>console.error(err.message))

app.use(express.json());
app.use("/api/estudiante",routerEstudiantes)

app.get("/",(req,res)=>{
    res.send("probando el servidor")
})


app.listen(port,()=>{
    console.log(`Escuchando el ${port}`)
})

