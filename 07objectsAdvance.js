let jsUser = {
    name:'sumit choudhary',
    age:20,
    salary:2000000
}

//-------------------------WE CAN PASS FUNCTION AS KEY VALUE PAIR IN OBJECTS----------------------------



console.log(jsUser); /*  {
    name: 'sumit choudhary',
    age: 20,
    salary: 2000000,
    greeting: [Function (anonymous)]
  }*/

jsUser.greeting = function () {
    console.log(`hello ${jsUser.name} AGE ${jsUser.age}`);
}

console.log(jsUser.greeting); /// [Function (anonymous)]
console.log(jsUser.greeting());
// hello sumit choudhary
// undefined
// ---- IT IS RETURNINFG UNDEFINED BECAUSE RETURN TYPE OF GREETING FUNCTION IS NOT DEFINED IT IS JUST PRINTING
jsUser.greeting() //  IF WE DIRECTLY CALL GREETING THAN NO UNDEFINED

jsUser.greeting2 = function () {
    return `hello ${jsUser.name}`;
}

console.log(jsUser.greeting2());

// *********************************OBJECT INSIDE OBJECTS *******************************************

const regularUser = {
    email:'chutiya@gmail.com',
    mobile: 8302839804,
    fullName: {
        userFullName:{
            firstName:'sumit',
            lastName:'choudhary'
        }
    }
}

console.log(regularUser.fullName);   //{ userFullName: { firstName: 'sumit', lastName: 'choudhary' } }
console.log(regularUser.fullName.userFullName); // { firstName: 'sumit', lastName: 'choudhary' }
console.log(regularUser.fullName.userFullName.lastName); // choudhary