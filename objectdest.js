const personOne = {
    name:'Abhishek',
    age:22,
    sports:'Cricket',
    address : {
        city:'Mumbai',
        state:'Maharashtra'
    }
}

const personTwo = {
    name: 'Ritik',
    age: 21,
    sports:'Football',
    address: {
        city:'indore',
        state:'Madhya Pradesh'
    }
}

// works based on key not on position unlike array
const {name, age} = personOne
console.log(`${name} ${age}`)

//to set the name to first name, maps the name property to firstname variable
const {name: firstname} = personTwo
console.log(firstname)

//by default
const {food = 'Rice'} = personOne
console.log(food)

//spread operator
// const {name,age, ...rest} = personOne
// console.log(rest)

//nested objects destr
const {name:myname, address: {city}} = personTwo
console.log(city)

//person two will override properties of person one

const personThree = {...personOne, ...personTwo}

console.log(personThree)

//more usecase

function printUser(user){
    console.log(`Name is ${user.name} and age is ${user.age}`)
}

printUser(personOne)

//other way using dest

function printUser2( {name, age ,food='Watermelon'}){
    console.log(`Name is ${name} and Age is ${age} and food is ${food}`)
}

printUser2(personOne)

