const express = require("express");
const controllerEstudiantes = require("../controllers/estudiante")

const router = express.Router();

// Tenemos que construir las rutas del CRUD

router.get("/", controllerEstudiantes.getEstudiantes);
router.post("/", controllerEstudiantes.create); //("crear estudiante")
router.patch("/",()=>console.log("editar estudiante"));
router.delete("/",()=>console.log("eliminar estudiante"));

module.exports = router