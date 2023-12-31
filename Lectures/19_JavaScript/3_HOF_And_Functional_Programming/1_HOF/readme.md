# Higher Order function 
- 1) When a function is treated as a varible it is called HOF
Syntax 
```
    const powerTwo = (n) => {
        return n**2;
    }
    function power_cube(powerTwo, n)
    {
     return powerTwo (n) * n;
    }

    let a = power_cube(powerTwo,2);
    console.log(a);
```



### JavaScript - Function Definitions and Higher-Order Functions

1. **Power Function**
   - `powerTwo`: Function to square a number.
   - Example: `const powerTwo = (n) => n ** 2;`.

2. **Cube Function Using Power Function**
   - `power_cube`: Uses `powerTwo` to calculate the cube.
   - Example: `function power_cube(powerTwo, n) { return powerTwo(n) * n; }`.

3. **Higher-Order Function: sayHello**
   - Returns a function that prints "Hello There".
   - Example: `function sayHello() { return () => console.log("Hello There"); }`.

4. **Nested Higher-Order Function: higherOrder**
   - Returns a function (`oneFun`), which returns another function (`twoFun`).
   - Adds three numbers across these nested functions.
   - Example: `const higherOrder = n => m => p => m + n + p;`.

5. **Sum Array Function**
   - `sumArray`: Sums all elements of an array.
   - Uses `forEach` to iterate and sum elements.
   - Example: `const sumArray = arr => { let total = 0; arr.forEach(element => total += element); return total; };`.

6. **setTimeout and setInterval**
   - `setTimeout`: Executes `oneMoreHello` after 2000 milliseconds.
   - `setInterval`: Repeatedly executes `oneMoreHello` every 1000 milliseconds.
   - `oneMoreHello`: Function that prints "Hello Sujeet".


