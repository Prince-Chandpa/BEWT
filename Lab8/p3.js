const express = require('express');
const fs = require('fs');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello From Express Home Page (P3)');
});

app.get('/about',(req,res) => {
    fs.readFile('./about.txt','utf-8',(err,data)=>{
        if(err){
            console.log('Error: ',err);
            return;
        }
        res.send(data);
    });
});

app.get('/contact',(req,res) => {
    fs.readFile('./contact.txt','utf-8',(err,data)=>{
        if(err){
            console.log('Error: ',err);
            return;
        }
        res.send(data);
    });
});

app.get('/profile',(req,res) => {
    res.send('<h1>Hello From Express Profile Page</h1>');
});

app.get('/help',(req,res) => {
    res.send('<h1>Hello From Express Help Page</h1>');
});

app.use((req,res)=>{
    res.status(404).send(`<h2 align="center" style="color:red;font-size:50px;margin-top:100px">Page Not Found</h2><br/><h1 align="center" style="color:red;font-size:100px">404</h1>`);
})

app.listen(3000,()=>{
    console.log('Server Strted @ 3000');
});