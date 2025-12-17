// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using
// http core module (C)

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain')
    
    if(req.url === '/'){
        res.statusCode = 200
        res.end('Welcome To Home Page of P3.js')
    }else if(req.url === '/about'){
        res.statusCode = 200
        fs.readFile('about.txt','utf-8',(err,data) => {
            if(err){
                console.log('Error: ',err)
                return
            }
            res.end(data)
        })
    }else if(req.url === '/contact'){
        res.statusCode = 200
        fs.readFile('./contact.txt','utf-8',(err,data) => {
            if(err){
                console.log('Error: ',err)
                return
            }
            res.end(data)
        })
    }else{
        res.statusCode = 404
        res.end('Page Not Found: '+res.statusCode)
    }
    
})

server.listen(3000,()=>{
    console.log('Server Started @ 3000');
});