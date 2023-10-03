//SINGLETON -- OBJECT CREATED BY OBJECT CONSTRUCTOR

let JsUser = {
    Name: 'sumit',
    Age: 20,
    Email: 'sumitjatt.com'
}

let keys = Object.keys(JsUser);
console.log(keys); //[ 'Name', 'Age', 'Email' ]

let values = Object.values(JsUser);
console.log(values); // [ 'sumit', 20, 'sumitjatt.com' ]

let entries = Object.entries(JsUser);
console.log(entries);  // [ [ 'Name', 'sumit' ], [ 'Age', 20 ], [ 'Email', 'sumitjatt.com' ] ]

// CONVERT ARRAY OF ARRAY(ARRAY OF ENTRIES) TO OBJECTS 

let val = [ [ 'Name', 'sumit' ], [ 'Age', 20 ], [ 'Email', 'sumitjatt.com' ] ]
let newObject = Object.fromEntries(val);
console.log(newObject);  // { Name: 'sumit', Age: 20, Email: 'sumitjatt.com' }

// **********************************************************************************************************

//  OBJECT CONSTRUCTOR

const emp = new Object();
emp.id = 20 
emp['name'] = 'Sumit' // IN SQUARE BRACKET NOTAION WE NEED TO PASS KEYS AS STRINGS
emp['id'] = 13
emp[1] = 13 // WE CAN PASS NUMBERS DIRECTLY BUT IT WILL BE TREATED AS STRING
// emp.1 = 15 ------------  WE CAN NOT ACCESS STRING KEYS USING DOT NOTATION
console.log(emp);

//.assign()

const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {3:'d',4:'e',5:'a'}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3); /// { '1': 'a', '2': 'b', '3': 'd', '4': 'e', '5': 'a' }