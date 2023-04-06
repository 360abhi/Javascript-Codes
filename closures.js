function outer() {
    var a = 10;
    return function inner() {
        console.log(a)
    }
}

//inner function forms a closure ,i.e, function and lexcical scope binding
//it retains the outerscope variables
var temp = outer()
temp()


//
function justlikethat() {
    console.log(8);
}
var my = justlikethat;
my()