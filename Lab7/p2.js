// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS.(B)

const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain')
    
    if(req.url === '/'){
        res.statusCode = 200
        res.end('Welcome To Home Page')
    }else if(req.url === '/about'){
        res.statusCode = 200
        res.end('Welcome To About Page')
    }else if(req.url === '/contact'){
        res.statusCode = 200
        res.end('Welcome To Contact Page')
    }else if(req.url === '/profile'){
        res.statusCode = 200
        res.end('Welcome To Profile Page')
    }else if(req.url === '/help'){
        res.statusCode = 200
        res.end('Welcome To Help Page')
    }else{
        res.statusCode = 404
        res.end('Page Not Found: '+res.statusCode)
    }
})

server.listen(3000,()=>{
    console.log('Server Started @ 3000');
});