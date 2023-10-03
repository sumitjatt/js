let accountEmail = "udfufh@gmail.com" // prefered to use
const accountNumber = 18263 // value cannot be changed
var accountCity = 'delhi'; // NOT PREFERABLE BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
// SENICOLON ARE OPTIONAL IN  JAVASCRIPT NO DIFFERENCE WAETHER YOU USE OR NOT

accountPassword = 97483 // WE CAN CRETE VARIABLE DIRECTLY BUT IT IS BAD PRACTICE

console.log(accountCity);
console.table([accountCity,accountEmail,accountNumber,accountPassword]); // GIVES RESULT IN TABLAUR FORM
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │      'delhi'       │
// │    1    │ 'udfufh@gmail.com' │    
// │    2    │       18263        │
// │    3    │       97483        │
// └─────────┴────────────────────┘

// DATA TYPES => PRIMITIE AND NON-PRIMITIVE
console.log(typeof null); // OBJECT
console.log(typeof undefined); // UNDEFINED

//PRIMITIVE

// number
// bigint
//string
//null
//undefined
//boolean
//symbol

// NON-PRIMITIVE

//obejcts
//array