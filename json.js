myobj = {
    "squirrel": false,
    "events" : ["work","touched tree","running"]
}
myobj = JSON.stringify(myobj);
console.log(JSON.parse(myobj).squirrel);
console.log(JSON.parse(myobj).events);

// const comp = [
//     {
//         "name" : "reliance",
//         "employeecount" : 3000,
//         "rating" : 5
//     },
//     {
//         "name" : "tata",
//         "employeecount" : 4000,
//         "rating" : 4
//     }
// ]

// console.log(comp[0].name);
