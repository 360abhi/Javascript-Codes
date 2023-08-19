const os =require('os');

os.platform();
os.arch();
os.cpus().length;
os.homedir();

//to debug
//node --inspect-brk index.js
// go to chrome://inspect
//we get acces to chrome dev tooks use breakpoints