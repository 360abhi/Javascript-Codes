/*
default arguments of every file/module is hidden
it is not same for all browser
let g=1 is not global in node but in browser in node it is 
inside wrapper function local variable
the five argmuents are : export module filename dirname require
build in wrapping function always returns module.exports evey time
by default
*/

exports.a = 42;
module.exports.b = 32;

module.exports = [1,2,3,4]
console.log(module.exports)

//in another file
const moduleapi = require('./concurrency')
console.log(moduleapi); 
//output {a:42,b:32} not after the array part

// we export the top level api in exports module
//module 