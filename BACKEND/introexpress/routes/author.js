const express = require("express");
const controllerAuthor = require("../controllers/author")
const router = express.Router();

router.post("/author",controllerAuthor.create)

router.get("/test",(req, res)=>{
    console.log("estamos en la ruta test");
    res.send("estamos en la ruta test").status(204)
})

router.get("/diana",(req, res)=>{
    console.log("hola Diana")
    res.send("hola diana").status(200)
})
router.get("/eduardo",(req, res)=>{
    console.log("hola eduardo")
    res.send("hola eduardo").status(200)
})

module.exports = router