// function:- it is a set of instruction or block of code
// function declaration, function definition and function calling after all of this function will run 
// function is use to reuse program

// syntax :-
// function identifier()             // function declaration
// {           
//     //code                // function definition
// }
// identifier()    // function calling

// function demo(){
//     let a = parseInt(prompt("Enter any number: "))
//     let b = parseInt(prompt("Enter any number: "))
//     let c =a+b
//     console.log(c);
// }
// demo()



// type of function 1. user-define  2. pre-define 

// type of user define function
//1. without argument and no return value
//2. with argument and no return value
//3. without argument and return value
//4. with argument and return value

// arguments/parameter :- 
// function fun1(parameter){
//        //code
// } 

// fun1(value(argument/actual_parameter))  //formal parameter


// function demo(a){
//     return a+a
// }
// console.log(demo(8))
// let z = demo(9)
// console.log(z)

//2. with argument and no return value
// function demo(a,b){
//     console.log(a*b); 
// }
// let a = parseInt(prompt("Enter a number: "))
// let b = parseInt(prompt("Enter a number: "))
// demo(a,b)

// wap to print  a table of any number using function type two
// function table(a){
//     for(let x=1; x<=10; x++){
//         console.log(a*x)
//     }
// }
// let i = parseInt(prompt("Enter any number for table: "))
// table(i)

//3. without argument and return value
// function demo(){
//     let a = parseInt(prompt("Enter any number: "))
//     return a+a
// }
// console.log(demo())

// function demo(){
//     return "Java Script"
// }
// console.log(demo());


//4. with argument and return value
// function demo(a,b){
//     return a+b
// }
// let a= parseInt(prompt("Enter 1st number: "))
// let b= parseInt(prompt("Enter 2nd number: "))
// console.log(demo(a,b))