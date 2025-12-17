// 4) Create a program that appends the text into a file named output.txt. (A)

const fs = require('fs');

console.log('---Start---');

fs.appendFile('output.txt','\nHello From append.',(err) => {
    if(err){
        console.log('Error: ',err);
        return;
    }
    console.log('Append Success !!!');
});

console.log('---End---');