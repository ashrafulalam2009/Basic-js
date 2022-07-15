class Support{
    name;
    designation = 'support web Dev';
    address= 'BD';

    constructor(name, address){
this.name = name;
this.address = address;
    }

    startSession(){
        console.log('start a support  session');
    }
}

const amir = new Support("Amir khan","India");
const salman = new Support("Salman khan","bd");

console.log(amir);
console.log(salman);