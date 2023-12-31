const square = (x) => x*x;
const sumTwoNum = (x,y) => x+y;
// Multiple statement in an expression 
const sum = (x,y) => {
    console.log(`Adding ${x} and  ${y} ` );
    return x+y;
}

// Returning an object 
const sumAndDifference = (x,y) => ({sum:x+y,difference:x-y});

let a = sumAndDifference(3,4);
console.log(a);
console.log(a["sum"]);

