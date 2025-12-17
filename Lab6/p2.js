// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the
// asynchronous version. (A)

const fs = require('fs');

console.log('---Start---');

try{
    const data = fs.readFileSync('info.txt','utf-8');
    console.log(data);
}catch(err){
    console.log('Error:',err);
}

console.log('---End---');