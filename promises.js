// const ticket = new Promise(function (resolve,reject){
//     const isBoarded = true;
//     if(isBoarded){
//         resolve('You are ready to go');
//     }else{
//         reject('You are not ready to go');
//     }
// })

// ticket.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// }).finally(()=>{
//     console.log("I will always run");
// })

function getCheese(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    })
}

// console.log(getCheese());

function makeDough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese+ "🍩";
            resolve(dough);
        }, 2000);
    })
}

function bakePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕"
            resolve(pizza);
        }, 2000);
    })
}

getCheese().then((cheese)=>{
    console.log("here is the cheese", cheese);
    return makeDough(cheese);
}).then((dough)=>{
    console.log("here is the dough", dough);
    return bakePizza(dough);
}).then((pizza)=>{
    console.log("here is the pizza", pizza);
}).catch((err)=>{
    console.log("error occured", err);
})