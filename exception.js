const fs = require('fs');

const files = ['ab.txt','cd.txt','gh.txt'];

files.forEach(file=>{
    try{
        const data = fs.readFileSync(file);
        console.log("The file data is ",data);
    }catch(error){
        if (error.code === 'ENOENT'){
            console.log("File not found");
        }else{
            throw error;
        }
    }
})