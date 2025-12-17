const {URL} = require('url');

let urlSrting = new URL('https://xyz.com');

urlSrting.pathname = '/myProfile/books';

urlSrting.searchParams.append('fn','prince');
urlSrting.searchParams.append('pw',123);
urlSrting.searchParams.append('age',19);

console.log(urlSrting.toString());