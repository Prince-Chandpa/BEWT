const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const facultyRoute = require('./routes/Faculty')
const studentRoute = require('./routes/Student')


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('MongoBD connected')
}).catch((err) => {
    console.log(err)
})

const app = express()
app.use(express.json())

app.use('/faculty',facultyRoute)
app.use('/student',studentRoute)

app.listen(3000, () => {
    console.log('Server Strted @ 3000');
})