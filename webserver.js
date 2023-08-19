const http = require('http');

const requestListener = (req,res)=>{
    res.write("Hello World");
    res.end();
}

const server = http.createServer()
server.on('request',requestListener);

server.listen(8000,()=>{
    console.log("Server is running on port 8000");
});

const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send("I dont need end function Hello there");
});

app.get('/about',(req,res)=>{
    res.send("From about page");
});

app.listen(4242,()=>{
    console.log("The server is running on port 4242");
});

//use ejs libe for template embed language
// first import it then

app.set('view engine','ejs');
server.get('/',(req,res)=>{
    res.render('index');
});

//this index file will be inside view folder
//we can parse js into the html