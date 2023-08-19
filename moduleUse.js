const print = require('./npmModule/index');

const message  = 'Hello Abhishek';
print(message);

//when we want the api to be objecdt we can use exports.property ='
//otherwise array or else module.export
//can also be function top level api like express()