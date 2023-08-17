this.id = 'exports';

const testObj = {
    fun1 : function() {
        console.log("fun1 ", this);
    },

    fun2: ()=>{
        console.log("fun2 ",this);
    }
}

testObj.fun1()
testObj.fun2() // retains the this value at time of initialization 

// does not matter from where it is called 
/*
we can define and call fun at same time (func and def)();

semantic version in npm packages
~1.2.3  = 1.2.X where x>=3
^1.2.3 = 1.X.y where x>=2
first major second minor third patch and bugs fixes

npm show pkgname versions
npm outdated : which pkgs will be updated
npm ls : versioning tree
npm install pkg@latest to bypass pkg.json file 
*/