const powerTwo = (n) => {
    return n**2;
}
function power_cube(powerTwo, n)
{
    return powerTwo (n) * n;
}

// let a = power_cube(powerTwo,2);
// console.log(a);


function sayHello(){
    return () =>{
        console.log("Hello There");
    }
}

// let guessValue = sayHello();
// guessValue();



const higherOrder = n =>{
    const oneFun = m => {
        const twoFun = p=>{
            return m+n+p;
        }
        return twoFun;
    }
    return oneFun;
}

// let a = higherOrder(2)(3)(4);
// console.log(a);


const mynums = [2,3,4,5];
const sumArray = arr=>{
    let total = 0;
    arr.forEach(element => {
       total=total+element; 
    });
    return total;
}

console.log(sumArray(mynums));


function oneMoreHello(){
    console.log("Hello Sujeet");
}
// setInterval(oneMoreHello,1000);


setTimeout(oneMoreHello,2000);