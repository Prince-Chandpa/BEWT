const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : String,
    enrollment : Number,
    email : {
        type : String,
        require : true,
        unique : true
    },
    password : String,
    phone : Number
},{timestamps: true})

module.exports = mongoose.model('Student', studentSchema)