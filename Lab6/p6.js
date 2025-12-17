// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already
// exists, show an appropriate message. (B)

const fs = require('fs');

console.log('---Start---');

fs.mkdir('my-data',(err)=>{
    if(err.code === 'EEXIST'){
        console.log('Folder EEXIST',err.code);
        return;
    }
    else if(err){
        console.log(err);
        return;
    }
    console.log('Created !!');
});

console.log('---End---');