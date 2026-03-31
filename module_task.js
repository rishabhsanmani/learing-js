let a= parseInt(prompt("Enter 1st number: "))
let b= parseInt(prompt("Enter 2nd number: "))

import sum from "./task1.js";
import sub from "./task2.js";
import {mul} from "./task3.js"
import {div} from "./task4.js"
import {mod} from "./task5.js"

console.log(sum(a,b))
console.log(sub(a,b))
console.log(mul(a,b))
console.log(div(a,b))
console.log(mod(a,b))
