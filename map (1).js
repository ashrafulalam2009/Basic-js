const numbers = [2,4,6,8,10,11,12,13];

const outPut2 = [];

const dobulIt = number => number*2;

for (const number of numbers ){

    // const result = number*2;
    const result = dobulIt(number);

    outPut2.push(result);
}

// console.log(outPut2);

// 1. loop
// 2. element diye function ke call kors
// 3. result ekta array er modde push korsi 



// Map wil do this three task in oneline 


// const outPut = numbers.map(dobulIt);

// const outPut = numbers.map(number => number*2);

const outPut = numbers.map(x=>x*2);


// console.log(outPut);

const squares = numbers.map(x=>x*x);

console.log(squares);




