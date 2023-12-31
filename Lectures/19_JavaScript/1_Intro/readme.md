# Java Script
- 1) Even if you use angular, react,.. etc At the end Web Browser can only understand HTML, CSS, Java Script
- 2) Its neither static nor dynamic language 
- 3) Its losely pacled language 

## Documentataion 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript
    https://www.w3schools.com/js/

- 3) Every Web browser has 2 types of engine 
    - 1) Rendering Engine (HTML, CSS )
    - 2) Execution Engine (Java Script)
    
## Why code JS using Node JS and not directly on the web browser ?
    console.log(this)
        We get {} on Node JS
        but when we do it on a browser we get Window {}


## Values and data types
### Premative data types

 numbers: 2,3,2.5, 24
 string: "PW Skills" or 'PW SKills'
 Boolean: true or false       // If alredy login then show logout vice a versa
 - null (Null ka matlab nothing) // If you get the temperature of Jaipur display it otherwise show NULL
 - undefined    let a;


 ### Non Prepative data types
 - Array to store similar data 
 let a = [1,2,4,"sujeet",true];


## Object: {} 
To be studied later 

## Operator
    - 1) = 
    - 2) *
    - 3) %
    - 4) /
    - 5) ** 
    - 6) == (Comparisions)   // console.log(1==true);
    - 7) >
    - 8) <
    - 9) === (Check also type) // console.log(1==="1");
    - 10) !=
    - 11) && and // And is used in purchaced, only allow purchased after login 
    - 12) || or  // Login via Gmail or phone number 

## How you used to use JS before Node JS
    - 1) Create a dummy html,js file
    - 2) Write the Js code
    - 3) Live server, inspect element, console to check the output 

## Conditions 
### If - ELse 
Syntax
```
    let age = 19;
    if (age>=18)
    {
      console.log("Eligible to vote");
    }

    else 
    {
    console.log("NOPE");
    }
```


### Switch Case
Syntax 
```
let user = "student";
switch (user)
{
    case "admin":
        console.log("He is Admin");
        break;
    case "student":
        console.log("He is Student");
        break;
    case "mentor":
        console.log("He is Mentor");
        break;
    default:
        console.log("This is Default");
}
```

## Loops
    - 1) Do While
    - 2) While 
    - 3) For 


### For Loop
```
for(let i = 0; i <5;i++){
    console.log(i);
}
```

### While Loop 
```
let i = 0;
while(i<5)
{
    console.log("Sujeet");
    i++;
}
```

### Do- While: 
- 1) Atleast EK bar Chalni Chaiye 
Syntax 
```
let i = 0;
do
{
    console.log(i);
    i++;
}while(i<1)
```


## Ternarry Condition 
 - 1) ? True: False
 ```
    islogin=true;
    islogin ? console.log("Go to Home") : console.log("Error");
```

## Array:
- 1) When you go beyond the bound, it gives you undefined 
### Array Methods 
#### Push 
```
    let arr = [1,2,34,5];
    arr.push(100,1000); // Seprated by ,
```

shift and pop will RETURN  A VALUE

### Pop
- 1 ) To remove the last element 
    arr.pop();

### shift:
- 1) Remove the first element 

### unshift:
- 1) Change the first element 


### Conacat :
Join two array 

### Join:
Join the array and make a string 
syntax 
```
let v = a4.join(' ')
console.log(v);
```

### reverse

### Slice


# splice 
 - 1) Add without deleting at a particular index 
 ```
 let nums = [10,20,30,40,50,60]
console.log(nums)
nums.splice(2,0, 100);
console.log(nums)

 ```


# Functions 
- 1) A piece of code which can be used somewhere else 
- 2) To solve code reduency 

syntax 
```
    function nameOfFunction()

```

## Default value 
- 1) This value is assigned whenever you do not pass required value to the parameters 
```
function add (x,y=10)
{
    return x + y ;
}

let a = add(2,3);
let b = add (2);
console.log(a);
console.log(b);

```


## Functions with unlimited Parameters
```
function sumOfAllParameters()
{
    let sum = 0;
    for( let i = 0; i <arguments.length;i++)
        {
            sum=sum+arguments[i];
        }
    return sum;
}
let a = sumOfAllParameters(1,2,3,4,5,6,7,8,9,10);
```


# Arrow Functions 
```
const square = (x) => x*x;
const sumTwoNum = (x,y) => x+y;
// Multiple statement in an expression 
const sum = (x,y) => {
    console.log(`Adding ${x} and  ${y} ` );
    return x+y;
}
```

# Anonymous Function  (Function Expression)
- 1)  Good for passing a function to another function 
```
let x = function()
{
    console.log("Good Morning");
}
x();
```

# Imeditely Invoke function  (Self Invoking function)
```
(function  exec() {console.log("Named")})();
(function (x){console.log(x**2)}) (3);
```

#  Objects {Key Value Pair}
- 1) Have State and Behaviour 
- 2) We have a car, car is the real life instance, and now 
```
 console.log(e);
 console.log(e.id);
 console.log(e['name']);

```

## Fetch Keys of the Object 
```
let k = Object.keys(emp);
let v = Object.values(emp);
let enteries = Object.entries(emp);

```

## Freeze
- 1) Cannot change nor add any more properties in the object 
    ```
    Object.freeze(emp);
    ```
## Seal
- 1) Cannot add more but can change 
    ```
    Object.seal(emp);
    ```

## Assign 

