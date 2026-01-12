const express = require('express')
const Book = require('../models/Book')
const router = express.Router()

router.use(express.json())

router.get('/', async (req,res) => {
    try{
        const books = await Book.find()
        if(!books){
            res.status(404).json({message: "Books Not Found"})
        }
        res.json({message: "Books Fetched Successfully", Books: books})
    }catch(err){
        res.json({err})
    }
})

router.get('/:id', async (req,res) => {
    try{
        const book = await Book.findById(req.params.id)
        if(!book){
            res.status(404).json({message: "Book Not Found"})
        }
        res.json({message: "Book Fetched Successfully", Book: book})
    }catch(err){
        res.json({err})
    }
})

router.post('/register', async (req,res) => {
    try{
        const {name, author, availableQuantity} = req.body


        const newBook = await Book.create({
            name, author, availableQuantity
        })

        res.json({message: "Successfully Book Registered", createdBook: newBook})
    }catch(err){
        res.json({err})
    }
})

router.patch('/update/:id', async (req,res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        res.json({message: "Book Update Successfully",updatedBook: book})
    }catch(err){
        res.json({err})
    }
})

router.delete('/delete/:id', async (req,res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id)

        if(!book){
            res.status(404).json({message: "Book Not Found"})
        }

        res.json({message: "Book Deleted Successfully"})
    }catch(err){
        res.json({err})
    }
})

module.exports = router