//function that operate on other functions

function greaterThan(n){
    return m => m>n;
}

let greaterthan10 = greaterThan(10);
console.log(greaterthan10(11));

//

const radiusarr = [3,5,2,1]

// const calculateRadius = function(radius){
//     const output =[]
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }

// console.log(calculateRadius(radiusarr))

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circum = function (radius) {
    return Math.PI * 2 * radius;
}

const diameter = function(radius){
    return 2*radius;
}

const calculate = function(radius,logic){
    const output = []
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radiusarr,area));
console.log(calculate(radiusarr,circum));
console.log(calculate(radiusarr,diameter));
