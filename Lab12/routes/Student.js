const express = require('express')
const Student = require('../models/Student')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(express.json())

router.get('/', async (req,res) => {
    try{
        const student = await Student.find()
        if(!student){
            res.status(404).json({message: "Students Not Found"})
        }
        res.json({message: "Students Fetched Successfully", Students: student})
    }catch(err){
        res.json({err})
    }
})

router.get('/:id', async (req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        if(!student){
            res.status(404).json({message: "Student Not Found"})
        }
        res.json({message: "Student Fetched Successfully", Student: student})
    }catch(err){
        res.json({err})
    }
})

router.post('/register', async (req,res) => {
    try{
        const {name, enrollment, email, password, phone} = req.body

        const hashPassword = await bcrypt.hash(password, 10)

        const newStudent = await Student.create({
            name, email, enrollment, password:hashPassword, phone
        })

        res.json({message: "Successfully Student Registered", createdStudent: newStudent})
    }catch(err){
        res.json({err})
    }
})

router.patch('/update/:id', async (req,res) => {
    try{
        const student = await Student.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        res.json({message: "Student Update Successfully",updatedStudent: student})
    }catch(err){
        res.json({err})
    }
})

router.delete('/delete/:id', async (req,res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id)

        if(!student){
            res.status(404).json({message: "Student Not Found"})
        }

        res.json({message: "Student Deleted Successfully"})
    }catch(err){
        res.json({err})
    }
})

module.exports = router