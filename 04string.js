// deceleration

let name = 'hitesh' // '' , "" , `` all can be used
let city = new String('delhi')

console.log(`hi ${name} live in ${city}`); // these dollor sign can only be used with `` these commos
 // METHODS

 console.log(name.length);
console.log(name[0]);
console.log(name.at(1));
console.log(name.indexOf('t'));
console.log(name.includes('es'));

let arr = name.split("")
let arr1 = name.split("t")
console.log(arr); // makes a array from string
console.log(arr1);

console.log('helllo world'.slice(2,10));
console.log('hello world'.toUpperCase());