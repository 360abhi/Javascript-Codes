const arrayA = ['abhishek', 'ritik','rathee']
const arrayB = ['golem','irfan','nikhil']

const newArray = [...arrayA, ...arrayB]
console.log(newArray)

//

const alphabets = ['A','B','C','D','E']

const[a,b] = alphabets
console.log(`${a} and ${b}`)

//skips the between
const[c,,d] = alphabets
console.log(`${c} and ${d}`)

//spread operator
const [x,y,...rest] = alphabets
console.log(rest)