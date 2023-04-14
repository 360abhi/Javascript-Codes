//map
const arr = [-3,-5,-2,-3]
//square
console.log(arr.map((n)=>n*n));
// double
console.log(arr.map((n)=>2*n));
//binary
console.log(arr.map((n)=>n.toString(2)));

// filter

const array =[4,7,6,5,9];
//filter odd values
console.log(array.filter((n)=>n%2==1));
//filter even values
console.log(array.filter((n)=>n%2==0));

//reduce

//sum or max
function sum(arr){
    let sum=0;
    for(let ele of arr){
        sum += ele;
    }
    return sum;
}

console.log(sum(arr));

//using reduce
//acc is like sum and curr is the elemts iterated through
//0 is the intial val of acc
console.log(arr.reduce((acc,curr)=>{
    acc += curr;
    return acc;
},0));

//max

console.log(arr.reduce((acc,curr)=>{
    acc = Math.max(acc,curr);
    return acc;
},-Infinity));

//

const myArray = [3,2,5,8,2];
const mySum = myArray.reduce((acc,curr)=>{
    acc += curr;
    return acc;
},0);

console.log(mySum);