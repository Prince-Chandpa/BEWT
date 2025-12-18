const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello From Express Home Page (P2)');
});

app.get('/about',(req,res) => {
    res.send('<h1>Hello From Express About Page</h1>');
});

app.get('/contact',(req,res) => {
    res.send('<h1>Hello From Express contact Page</h1>');
});

app.get('/profile',(req,res) => {
    res.send('<h1>Hello From Express Profile Page</h1>');
});

app.get('/help',(req,res) => {
    res.send('<h1>Hello From Express Help Page</h1>');
});

app.use((req,res)=>{
    res.status(404).send('<h2 align="center"Page Not Found</h2>');
})

app.listen(3000,()=>{
    console.log('Server Strted @ 3000');
});