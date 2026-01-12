const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    enrollment: Number,
    department: String,
    password: String,
    phone: Number
},{timestamps: true})

module.exports = mongoose.model('Student',studentSchema)