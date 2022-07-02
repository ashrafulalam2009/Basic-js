// Declare variable based on the name of an object property

const myObject = {x:2, y:50,z : 600, a:25, b:68};

const{x,b} = myObject;
console.log(b);

// destructuring array

const [p,q] = [35,50, 91,96];

console.log(p,q);

const [best,good] = ['mohona','nipa'];
console.log(best,good);

const{sky,soil,money,color} = {sky:'blue',soil:'soft',color:'red',money:500}

console.log(sky,color,money);