class Support{
    name;
    designation = 'support web Dev';
    address= 'BD';

    constructor(name){
this.name = name;
    }

    startSession(){
        console.log('start a support  session');
    }
}

const amir = new Support("Amir khan");
const salman = new Support("Salman khan");

console.log(amir);
console.log(salman);