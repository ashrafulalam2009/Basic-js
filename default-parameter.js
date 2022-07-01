// function add(num1,num2 = 100){


//     // option1 
//     // num2 = num2 || 0;

// // option2
// // console.log(num1,num2);
// // if(num2 == undefined){
// //     num2 = 0;
// // }

//     const total = num1 + num2;
//     return total;

// }

// const result =add(15, 
//    5 );
// console.log(result);



function fullName(first, last = 'chowdhory'){

const name = first + '' + last;
return name;

}
const outPut = fullName('ragib', 'ali'
);
console.log(outPut);
