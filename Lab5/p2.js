// Q-2:

const child_process = require("child_process");


const child = child_process.spawn("ls",["-l"])
child.stderr.on('data',(data) => {
    console.log('StdErr:', data);
});

child.stdout.on('data',(data) => {
    console.log('StdOut:', data.toString());
});

child.on('close',(code)=>{
    console.log('Close:', code);
});