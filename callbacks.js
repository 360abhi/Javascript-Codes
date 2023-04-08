// a callback is a function passed as an argument to another function

function greet(name, callback){
    console.log("Hello "+name);
    callback();
}

function callme(){
    console.log("I am a callback function");
}

greet('Abhishek',callme);

const calculate = (a,b,operation) => {
    return operation(a,b);
}

const res =calculate(3,4,(m,n)=>{
    return m+n;
})

console.log(res)

//set timeout function
// setTimeout(function,milliseconds);
console.log("hello");
setTimeout(() => {
    console.log("Im back");
}, 3000);
console.log("Lazt line");
