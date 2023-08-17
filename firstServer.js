const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("This is the homepage");
});

const PORT = 8000;
server.listen(PORT,()=>{
    console.log("The server is running");
})