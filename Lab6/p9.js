// 9) Write a program that checks if the file config.json exists in the current directory using
// fs.existsSync() and prints the result. (B)

const fs = require('fs');

console.log('---Start---');
try{
    const data = fs.existsSync('data.txt');
    if(data){
        console.log('Exists');
    }else{
        console.log('Not Exists');
    }
}catch(err){
    console.log(err);
}

console.log('---End---');