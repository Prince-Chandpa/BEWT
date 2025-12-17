// 3) Create a program that writes the text into a file named output.txt. (A)

const fs = require('fs');

console.log('---Start---');

fs.writeFile('output.txt','Hello',(err) => {
    if(err){
        console.log('Error:',err);
    }
    console.log('---Data Writen---');
});

// try{
//     fs.writeFileSync('output.txt','Hello By sync method');
// }catch(err){
//     console.log('Error:',err);
// }

console.log('---End---');