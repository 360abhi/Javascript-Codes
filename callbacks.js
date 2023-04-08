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

// set timeout function
//setTimeout(function,milliseconds);
// console.log("hello");
// setTimeout(() => {
//     console.log("Im back");
// }, 3000);
// console.log("Lazt line");

// function getCheese(){
//     setTimeout(() => {
//         const cheese ="My cheesettt";
//         console.log("Here is my cheese"+cheese);
//         return cheese;
//     }, 3000);
// }

// console.log(getCheese());
//here the return cheese returns undefined 
//console.log inside prints after 3 seconds
// so we use callback funtion inside it which will bring use cheese when the time is over 
//here the return statement does not make any sense

function getCheesetwo(callback){
    setTimeout(() => {
        const cheese = "My Abhicheese"
        console.log("Here is My abhicheese");
        callback(cheese);
    }, 2000);
}

function getDough(cheese,callback){
    setTimeout(() => {
        const dough = cheese + " dough";
        console.log("got the "+ dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough,callback){
    setTimeout(() => {
        const pizza = dough + " pizza";
        console.log("got the "+pizza);
        callback(pizza);
    }, 2000);
}

getCheesetwo((cheese)=>{
    getDough(cheese,(dough)=>{
        bakePizza(dough,(pizza)=>{
            console.log(pizza);
        })
    })
})