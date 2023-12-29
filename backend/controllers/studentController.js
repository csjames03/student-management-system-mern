const StudentModel = require('../model/studentModel');


const createStudent = async (req, res)=>{
    const {name, lastname, year} = req.body

    try{
        const student = await StudentModel.create({name, lastname, year})
        res.status(201).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


const getAllStudent = async (req, res)=>{
    try{
        const students = await StudentModel.find({}).sort({createdAt: -1})
        res.status(200).json(students)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


const getSpecificStudent = async (req, res)=>{
    const id = req.params.id

    try{
        const student = await StudentModel.findById(id)
        res.status(200).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateStudent = async (req, res)=>{
    const {id, name, lastname, year} = req.body

    try{
        const student = await StudentModel.findByIdAndUpdate(id,{
            name, lastname, year
        })
        res.status(201).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteStudent = async (req, res)=>{
    const {id} = req.body

    try{
        const student = await StudentModel.findByIdAndDelete(id)
        res.status(204).json(student)

    }catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    createStudent,
    getAllStudent,
    getSpecificStudent,
    updateStudent,
    deleteStudent
}