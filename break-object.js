// const fish = {id : 10, name:'hilsha', phone:'01754124',
//  address: 'chandpur', dress: 'silver', price:100,};

// const phone = fish.phone;
// const price = fish.price;
// const address = fish.address;

// const{phone,price,address} = fish;

const company = {name:'gp',ceo: {id:5, name:'ashraful',food:'fusca'}, web:{work:'webdevelopment',framework:'react'}}


// const work = company.web.work;
// const framework = company.web.framework;

const {work,framework}= company.web;
const {food}= company.ceo;

// console.log(phone);
// console.log(price);
// console.log(address);
// console.log(phone);
// console.log(price);

console.log(work,framework,food);


