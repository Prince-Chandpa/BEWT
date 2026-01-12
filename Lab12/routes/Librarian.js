const express = require('express')
const Librarian = require('../models/Librarian')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(express.json())

router.get('/', async (req,res) => {
    try{
        const librarian = await Librarian.find()
        if(!librarian){
            res.status(404).json({message: "Librarians Not Found"})
        }
        res.json({message: "Librarians Fetched Successfully", Librarians: librarian})
    }catch(err){
        res.json({err})
    }
})

router.get('/:id', async (req,res) => {
    try{
        const librarian = await Librarian.findById(req.params.id)
        if(!librarian){
            res.status(404).json({message: "Librarian Not Found"})
        }
        res.json({message: "Librarian Fetched Successfully", Librarian: librarian})
    }catch(err){
        res.json({err})
    }
})

router.post('/register', async (req,res) => {
    try{
        const {name, email, password, phone} = req.body

        const hashPassword = await bcrypt.hash(password, 10)

        const newLibrarian = await Librarian.create({
            name, email, department, enrollment, password:hashPassword, phone
        })

        res.json({message: "Successfully Librarian Registered", createdLibrarian: newLibrarian})
    }catch(err){
        res.json({err})
    }
})

router.patch('/update/:id', async (req,res) => {
    try{
        const librarian = await Librarian.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        res.json({message: "Librarian Update Successfully",updatedLibrarian: librarian})
    }catch(err){
        res.json({err})
    }
})

router.delete('/delete/:id', async (req,res) => {
    try{
        const librarian = await Librarian.findByIdAndDelete(req.params.id)

        if(!librarian){
            res.status(404).json({message: "Librarian Not Found"})
        }

        res.json({message: "Librarian Deleted Successfully"})
    }catch(err){
        res.json({err})
    }
})

module.exports = router