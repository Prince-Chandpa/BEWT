const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    department: String,
    experience: Number,
    password: String,
    phone: Number
},{timestamps: true})

module.exports = mongoose.model('Faculty',facultySchema)