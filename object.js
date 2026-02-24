// object is a data type it is use to store multiple type of data it is denoted by{} it is unordered because it has no indexing 
// there are two type of notation in object i.e. (.) and []

// let student = { name:"Rishabh",age:19,city:"Chhindwara" }
// console.log(student.city);

// let student = { name:"Rishabh",age:19,city:"Chhindwara",bank:{acno:12345,ac_balance:1200}}
// console.log(student.bank.ac_balance);

// let student = { name:"Rishabh",age:19,city:"Chhindwara",bank:{acno:12345,ac_balance:1200}, monthly:[300,400,1100]}
// console.log(student.monthly[2]);

// let emp = {emp_name:prompt('Enter employee name: '),
//            emp_age:prompt("Enter employee age: "),
//            emp_city:prompt("Enter employee city")
//     }
// console.log(emp)

// let obj = {name:"Rishabh", age:19, city:"Chhindawra"}
// for( let k in obj){
//     console.log(k);
// }

// let obj = {"name 1":"Ali", "name 2":"Sameer"}
// console.log(obj["name 1"])

// let obj = {name:"rishabh",age:19}
// for(let k in obj){
//     if(k=='name'){
//         console.log(k)
//     }
// }

// let obj = {name:"rishabh",age:19}
// let k=Object.keys(obj)
// console.log(k)
// console.log(k[0])

// destructuring of object :-
// let {name,city} = {name:"Rishabh", city:"Chhindwara"}
// console.log(name);

// spread operator
// let ob1 = {name:"Rishabh",city:"Chhindwara"}
// let ob2 = {contact:12345678}
// let ob3 = {...ob1,...ob2}
// console.log(ob3)
