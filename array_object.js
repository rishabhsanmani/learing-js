let student = [
    {
        name:"sameer",
        rollno:101,
        city:"bhopal",
        grade:"A"
    },
    {
        name:"saksham",
        rollno:102,
        city:"berasia",
        grade:"B"

    },
    {
        name:"aniruddh",
        rollno:104,
        city:"hoshangabad",
        grade:"C"

    }
]
// console.log(student[2]);


// callback function and higher order function

// function demo(function)


     //MAP

// student.map(function)     it access the array and returns the new array

let vl = student.map((e)=>{return e.name})
console.log(vl);


let gr = student.map((g)=>{return g.grade})
console.log(gr);


    //FILTER

// let r = student.filter((i)=>{return i.city == "berasia"})
// console.log(r);


// create an array of object (employe) and find the data of employee whos salary above 15000 and age above 30


// let employee = [
//     {
//         name:"sameer",
//         salary:"16000",
//         age:"31"
//     },
//     {
//         name:"saksham",
//         salary:"100000",
//         age:"32"

//     },
//     {
//         name:"aniruddh",
//         salary:"14000",
//         age:"29"
//     },
//     {
//         name:"rishabh",
//         salary:"2000",
//         age:"3"
//     },
//     {
//         name:"krish",
//         salary:"10000",
//         age:"18"
//     }
// ]

// console.log(employee);

// let r = employee.filter((i)=>{return i.salary > 15000 && i.age >30 })
// console.log(r);