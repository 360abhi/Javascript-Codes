//more examples

const users = [
    {
        firstName: 'Abhishek',
        lastName: 'Chhawari',
        age: 23
    },
    {
        firstName: 'Ritik',
        lastName: 'Singh',
        age: 23
    },
    {
        firstName: 'Donald',
        lastName: 'Trump',
        age: 54
    },
    {
        firstName: 'Elon',
        lastName: 'Musk',
        age: 48
    },
]

//list of full names

console.log(users.map((x) => x.firstName + " " + x.lastName));

// console.log(users.map((x)=>x.firstName + " "+ x.lastName));

//ages object and their count using reduce

console.log(users.reduce((acc, curr) => {
    if (acc[curr.age]>0) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}));

//first name of people whose age less than 30
console.log(users.filter((x)=>x.age<30)
.map((x)=>x.firstName));

//last name of people with age more than 30

console.log(users.filter((x)=>x.age>30)
.map((x)=>x.lastName));