const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const librarian = require('./routes/Librarian')
const student = require('./routes/Student')
const book = require('./routes/Book')
const transaction = require('./routes/Transaction')

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.use('/librarian',librarian)
app.use('/student',student)
app.use('/book',book)
app.use('/transaction',transaction)

app.listen(3000, () => {
    console.log('Server Strted @ 3000');
})