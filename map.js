const numbers = [2,4,6,8];

const outPut = [];

// function doubleOld(number){

//     return number*2;

// }

const doubleIt = number => number*2;

for(const number of numbers){

 const result = doubleIt(number);

 //   const result = number*2;

    outPut.push(result);
}

console.log(outPut);
