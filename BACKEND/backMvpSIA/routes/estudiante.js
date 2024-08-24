const express = require("express");
const controllerEstudiantes = require("../controllers/estudiante")

const router = express.Router();

// Tenemos que construir las rutas del CRUD
router.get("/", (req, res)=>{
    onsole.log("get");
    res.send("Ruta")
})

router.get("/:id",()=>console.log("leer estudiante usando el id"));
router.post("/", controllerEstudiantes.create); //("crear estudiante")
router.patch("/",()=>console.log("editar estudiante"));
router.delete("/",()=>console-log("eliminar estudiante"));

module.exports = router