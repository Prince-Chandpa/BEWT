const path = require('path');
const os = require('os')

console.log('Directory Name: '+__dirname);
console.log('File Name: '+__filename);
console.log('File Extention Name: '+path.extname(__filename));
console.log('File Full Path: '+path.basename(__filename));

console.log('\n');

console.log('Join Path: '+path.join('users','arjun','documents','projrct'));
console.log('Fixe Path: '+path.normalize("//folder//subfolder////file.txt"));
console.log('is Absolute Path: '+path.isAbsolute('/Study/BEWT/Lab4'));
console.log('is Absolute Path: '+path.isAbsolute('./Study/BEWT/Lab4'));
console.log('Resolve Path: '+path.resolve('folder','subfolder','app.js'));

console.log('\n');

console.log("Operating System Name:",os.type());
console.log("Release Version:", os.release());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());

console.log('\n');

console.log("Total Memory: ",os.totalmem(),' B ',os.totalmem()/(1024*1024*1024),' GB');
console.log("Free Memory: ",os.freemem(),' B ',os.freemem()/(1024*1024*1024),' GB');

console.log("User Info: ",os.userInfo());
console.log("Up Time: ",os.uptime(),' sec ',os.uptime()/(3600),' hours');

console.log("CPUs Info: ",os.cpus());
console.log("CPUs Info: ",os.networkInterfaces());