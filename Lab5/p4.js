const {URL} = require('url');

const urlString = new URL('https://darshanums.in/StudentPanel/StudentDashboard.aspx?pw=123&fn="prince"&ln="chandpa"&age=19');

console.log('Protocol:',urlString.protocol);
console.log('HostName:',urlString.hostname);
console.log('PathName:',urlString.pathname);

console.log('Query Parameters');

urlString.searchParams.forEach((value,key) => {
    console.log(`${key} : ${value}`);
});