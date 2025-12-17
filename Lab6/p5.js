// 5) Write a program to delete a file named temp.txt using fs.unlink() and display success or
// error. (B)


const fs = require('fs');

console.log('---Start---');

fs.unlink('temp.txt',(err)=>{
    if(err){
        console.log(err);
    }
})

console.log('---End---');