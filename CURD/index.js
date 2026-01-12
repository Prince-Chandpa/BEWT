const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const User = require('./model/user')

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongodb connected")
}).catch((err) => {
    console.log(err)
})

app.get('/user', async (req, res) => {
    try {
        const user = await User.find()
        res.json({ message: "Successfully Fethced", allUser: user })
    } catch (err) {
        res.json({ err })
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            return res.status(400).json({ message: "User Not Found" })
        }

        res.json({ message: "Successfully Fetched", user: user })
    } catch (err) {
        res.json({ err })
    }
})

app.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body

        const newUser = await User.create({
            name, email, password, phone
        })

        res.json({message: "Successfully User Registered",createdUser: newUser})

    }catch(err){
        res.json({err})
    }
})

app.patch('/update/:id', async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set : req.body
            },
            {
                new : true
            }
        )
        res.json({message: "Successfully Updated",updatedUser: user})
    }catch(err){
        res.json({err})
    }
})

app.delete('/delete/:id',async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        
        if(!user){
            res.status(400).json({message: "User Not Found"})
        }

        res.json({message: "User Deleted Successfully"})
    }catch(err){
        res.json({err})
    }
})


// const generatetoken = (userId) => {
//     return jwt.login(id:userId)
// }

// const verifyToken = (req, res, next) => {
//     const authHeaders = req.headers.authorization

//     if (!authHeaders) {
//         return res.json({ message: "Token Missing" })
//     }
//     const token = authHeaders.split(" ")
//     try {
//         const decoded = jwt.verify(token, process.env.secreatkey)
//         res.id = decoded.id
//         next()
//     } catch (err) {
//         res.json({ message: 'Invalid Token' })
//     }
// }

app.listen(3000, () => {
    console.log('Server Strted @ 3000');
})