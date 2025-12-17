// 7) Write a program to list all files in a folder called documents/ using fs.readdir() and print the
// file names one by one. (B)


const fs = require('fs');

console.log('---Start---');

fs.readdir('../Lab6',(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        // console.log(data);

        data.forEach((fileName,index) => {
            console.log(index,':',fileName);
        });
    }

})

console.log('---End---');