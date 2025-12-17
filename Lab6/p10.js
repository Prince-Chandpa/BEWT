// 10) Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content
// changes, print: “File Changed” (C)

const fs = require('fs');

console.log('---Start---');

fs.watch('.',(eventType,fileName) => {
    if(fileName === 'output.txt'){
        console.log(fileName,'Event Type:',eventType);
    }
});

console.log('---End---');