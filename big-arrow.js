const add =(num1,num2) => num1 +num2;

const multyply = (num1,num2,num3) => num1 * num2 * num3;



// for single parameter do  not need any braket
const fiveTimes = num => num *5;    


// / when there is no parameter .just keep a first braket empty

const getName = () => 'md ashraful alam';

const name = getName()

// Multiline array function

const doMath = (x,y) => {

    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    const output =result * 2;
    return output;


}
const total = doMath(4,2);
console.log(total);


// const sum = add(22,90);
// const result = multyply(2,3,6);
// const output = fiveTimes(5);
// console.log(sum);
// console.log(result);
// console.log(output);
// console.log(name);