// 1. Create a hello world webapp using “http” core module in NodeJS. (A)
const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('--- Hello World From P1.js ---');
});

server.listen(3000,()=>{
    console.log('Server Started @ 3000');
});