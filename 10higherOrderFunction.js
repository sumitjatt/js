function sayHello(){
    return () =>{
        console.log('hello hitesh');
    }
}

const guessValue = sayHello();

console.log(guessValue); // IT WILL RETURN FUNCTION IN OUTPUT
guessValue() // IT WILL PRINT HELLO HITESH
guessValue // it will do nothing 


const higherOrder = n =>{
    const oneFunc = (m) => {
        function twoFunc(p){
            return(m*n*p)
        }
        return twoFunc
    }
    return oneFunc
}

console.log(higherOrder);
// console.log(oneFunc); // IT WILL THROW ERROR BECAUSE IT IS DEFINED INSIDE FUNCTION ITS SCOPE IS NOT DEFINED
console.log(higherOrder(10)(5)(4));
// CORECT WAY TO PASS