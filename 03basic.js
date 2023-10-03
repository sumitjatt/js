let str = '33'
let num = Number(str)
console.log(num);
console.log(typeof num);

/* '33' => 33 , '33a' => NaN , true => 1 , null => 0 */

// datatypes to bool

let numb = 33   
let bool = Boolean(numb)
console.log(bool);
console.log(typeof bool);

// num != 0 => true , num ==0  => false , '' =>false , 'sds' => true , null => false , undefined => false

//DATATYPES TO STRING

let value = 33
let strng = String(value)
console.log(strng);
console.log(typeof strng); // all datatype value same but thier type become string 

// OPERATIONS

//  ALWAYS AVOID THESE TYPES OF OPERATIONS USE BRACKETS INSTESD OF THESE LONG LINES
console.log(1 +'2');        // 12
console.log('1' + 2);       // 12
console.log('1' + 2 + 2);   // 122
console.log(1 + 2 + '2');   // 32
console.log(true);          // true
console.log(+true);         // 1

// COMPARISION

console.log('2'>1); // true
console.log('02'>1); // true
console.log(2>'1'); // true
console.log(null>0); // false  CONVERT NULL TO 0
console.log(null==0); //false 
console.log(null>=0);  // true
console.log('2'==2); // true
console.log('2'===2); // false