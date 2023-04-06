const person = {
    test() {
        //var self = this;
        setTimeout(() => {
            console.log(this);
        },2000);
        setTimeout(function() {
            console.log(this)
        }, 2000);
    }
}

person.test()

//second function prints this from where its called unlike the arrow function
//the normal function prints out the window object