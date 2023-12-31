function greet()
{
    console.log("Hi how are you ");
    console.log("Good Morning");
}

function sqr(x)
{
    return x**2;
}

function add (x,y=10)
{
    return x + y ;
}


function sumOfAllParameters()
{
    let sum = 0;
    for( let i = 0; i <arguments.length;i++)
        {
            sum=sum+arguments[i];
        }
    return sum;
}

// let a = add(2,3);
// let b = add (2);
// console.log(a);
// console.log(b);


// greet();
// let a = sqr(5);
// console.log(a);


let a = sumOfAllParameters(1,2,3,4,5,6,7,8,9,10);
console.log(a);
