if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40;
    console.log(`INSIDE FUNCTION ${a}`);
    console.log(`INSIDE FUNCTION ${b}`);
    console.log(`INSIDE FUNCTION ${c}`);
    console.log(`INSIDE FUNCTION ${d}`);
}
// ----- let and const don't  give access out of scope that's why we use them
//console.log(`OUTSIDE FUNCTION ${a}`);
//console.log(`OUTSIDE FUNCTION ${b}`);
console.log(`OUTSIDE FUNCTION ${c}`);
console.log(`OUTSIDE FUNCTION ${d}`);
