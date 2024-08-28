const Estudiante = require("../models/estudiante");

const controllerEstudiantes = {
    create: async (req, res)=>{
        try{
            console.log(req.body)
            await Estudiante.create({
                nombre: req.body.nombre,
                materias: req.body.materias,
                asistencia: req.body.asistencia,
                tareas: req.body.tareas
            })
            res.status(201).send("Estudiante creado")
        } catch (error){
            return res.status(500).send(error.message)
        }
    },
    getEstudiantes : async (req, res) =>{
        try {
            const estudiante = await Estudiante.find({})
            res.json(estudiante).status(200)
        } catch (error){
            return res.status(500).send(error.message)
        }
    },
    getEstudiantePorId : async (req, res) => {
        try{
            const {id} = req.params
            const estudiante = await Estudiante.findById(id)
            res.json(estudiante).status(200)

        } catch (error){
            return res.status(500).send(error.message)
        }
    },
    upDateEstudiantesPorId : async (req, res) =>{
        try{
            const {id} = req.params
            await Estudiante.findByIdAndUpdate(id,{
                nombre : req.body.nombre,
                materias : req.body.materias,
                asistencia : req.body.asistencia,
                tareas : req.body.tareas
            })
            res.status(200).send("Estudinate actualizado");
        } catch (error) {
            return res.status(500).send(error.message)
        }

    }

}

module.exports = controllerEstudiantes