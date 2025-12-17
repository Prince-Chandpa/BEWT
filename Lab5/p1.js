const child_process = require('child_process');

// Q-1:

child_process.exec('node --version',(err,stdout,stderr)=>{
    if(err){
        console.log('Error: '+err);
        return;
    }
    
    if(stderr) {
        console.log('StdErr: '+stderr);
        return;
    }

    console.log(stdout);

});

child_process.exec('python3 p1.py',(err,stdout,stderr) => {
    if(err){
        console.log('Error: '+err);
        return;
    }
    if(stderr) {
        console.log('StdErr: '+stderr);
        return;
    }
    console.log(stdout);
});



// child_process.exec('ls',(err,stdout,stderr)=>{
//     if(err) console.log('Error: '+err);

//     console.log(stdout);

//     if(stderr) console.log('StdErr: '+stderr);
// });