const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){
    try{
        if(req.url.toString().indexOf("login") > -1){
            next();
        }else{
            var decoded = jwt.verify(req.headers.authorization.split(" ")[1], process.env.PRIVATEKEY);
            next();
        }
    }catch(err){
        res.status(401).send({error:true, message:"Unauthorized"});
    }
}

module.exports = { authMiddleware };