let obj = {id:101, name:"Sujeet", salary:44};
// console.log(obj);

let emp = new Object;
console.log(emp)
emp.id=102;
emp.name="Manali";
// console.log(emp)


function Emp (i,n,s)
{
    this.id=i;
    this.name=n;
    this.salary=s;
}

const e = new Emp(1000,"Sanmansuj",40);
// console.log(e);
// console.log(e.id);
// console.log(e['name']);


e.salary=50;
// console.log(e);
delete e.id;
// console.log(e);


console.log(emp);
let k = Object.keys(emp);
let v = Object.values(emp);
let enteries = Object.entries(emp);

console.log(k);
console.log(v);
console.log(enteries);

Object.freeze(emp);
Object.seal(emp);


let o = Object.assign({x:16},emp);
console.log(o);