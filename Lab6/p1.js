// 1) Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously
// and print its content on the console. (A)

const fs = require('fs');

console.log('---Start---');

fs.readFile('data.txt',(err, data) => {
    if(err){
        console.log('Error: ',err);
        return;
    }
    console.log(data.toString());
});

console.log('---End---');