class Human {
    constructor(){
        this.gender = "male";
    }
    printmyGender(){
        console.log(this.gender);
    }
}

class Person  extends Human{
    constructor () {
        super();
        this.name = "Max";
    }

    printmyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printmyName();
person.printmyGender();