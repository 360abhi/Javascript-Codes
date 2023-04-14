// const myobj = {
//     "squirrel": false,
//     "events" : ["work","touched tree","running"]
// }
// // myobj = JSON.stringify(myobj);
// // console.log(JSON.parse(myobj).squirrel);
// // console.log(JSON.parse(myobj).events);

// console.log(myobj)
// console.log(typeof myobj)

const myJSON = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

console.log(myJSON.name); // Output: John
console.log(myJSON["age"]); // Output: 30

myJSON.name = "Sarah";
myJSON["age"] = 25;
console.log(myJSON); // Output: { "name": "Sarah", "age": 25, "city": "New York" }

// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// const myObj = JSON.parse(jsonString);
// console.log(myObj); // Output: { "name": "John", "age": 30, "city": "New York" }

const myObj = { "name": "John", "age": 30, "city": "New York" };
const jsonString = JSON.stringify(myObj);
console.log(typeof jsonString); // Output: '{"name":"John","age":30,"city":"New York"}'



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
