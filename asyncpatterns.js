const fs = require('fs');

fs.readFile(__filename,function callback(err,data){
    console.log("The file's data is ", data);
});

console.log("test") //runs before callback
//the call back fun recieves err as its first argument
//pyramid of doom

fs.readFile(__filename,function callb(err,data){
    fs.writeFile(__filename,function call(err,data){
        //more call back function here
    });
});

//promisify the async operation

const util = require('util');
const readFile = util.promisify('fs.readFile');

async function main(){
    const data = await readFile(__filename);
    console.log("File data is ",data);
}

main();
console.log("test again");

//some modules first level api provide promisfy 
const {readFile} = require('fs').promises;

const fs = require('fs').promises;

async function nested(){
    const data = await fs.readFile(__dirname);
    await fs.writeFile(__filename + ".copy" + data);

}