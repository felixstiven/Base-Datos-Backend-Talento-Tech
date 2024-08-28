const express = require("express");
const controllerEstudiantes = require("../controllers/estudiante")

const router = express.Router();

// Tenemos que construir las rutas del CRUD
router.get("/", controllerEstudiantes.getEstudiantes);
router.get("/:id", controllerEstudiantes.getEstudiantePorId);
router.post("/", controllerEstudiantes.create); //("crear estudiante")
router.put("/:id", controllerEstudiantes.upDateEstudiantesPorId);
router.delete("/:id", controllerEstudiantes.deleteEstudiantePorId)

module.exports = router