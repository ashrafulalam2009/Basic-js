

//  class ClassName{

//     constructor(){}

//  }


class Car {
    constructor(name,year) {
    this.name = name;
    this.year = year;

    }
}

const car1 = new Car("Toyota", 2017);
const car2 = new Car("suzuki", 2020);

// console.log(car1);
// console.log(car2);


class Person {

    address = 'bangladesh';
    constructor(name,age) {
    this.name = name;
    this.age = age;
    }

    // method  ***
    play(status){
        console.log(`${this.name} is playing ${status}`);

    }

}

const person1 = new Person("sakib",35 );
const person2 = new Person("tamim", 38);

console.log(person1);
console.log(person2);


person1.play("well");
person2.play("bad");
