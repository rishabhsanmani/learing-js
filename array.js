// indexing:- address of element
// indexing 0 se start kyu hota hai

// let stu = ["Rishabh",19,5.9,"Cwa",true]
// // console.log(stu)
// // console.log(stu[0])
// // console.log(stu[3])
// for(let a=0; a<(stu.length);a++){
//     console.log(stu[a])
// }

//wrong
// let p=[]
// let i
// for (let a=1; a<=5; a++){
//     i=prompt("Enter values:")
// }
// p=i
// console.log(p)

// let p=[]
// for( let i=0; i<5; i++){
//     p[i]=prompt("Enter values: ")
// }
// console.log(p)

// wap to print a sum of all elements between 8 to 1
// p=[8,7,6,5,4,3,2,1]
// let sum=0
// for(let i=0; i<(p.length);i++){
//     sum= sum+p[i]
// }
// console.log(sum)

// ... spread operator it is use is array
// ... is rest operator it is use in function
// let ar1=["Saksham","ali","pradosh","jay"]
// let ar2=["bhupendra","chandan","tanishk"]
// let ar3=[...ar1 , ...ar2]
// console.log(ar3)

// Destructuring of array :- with use of this we do not need indexing to call the elements of the array
// let [name,age,city,height] = ["Rishabh",19,"Cwa",5.10]
// console.log(name)

// let [name,age, ,height] = ["Rishabh",19,"Cwa",5.10]         // this help to 
// console.log(name)


// for of loop :- it is use to access array's element without using indexing it is specificly use in array only
// let emp = ["deepali","bpl",1234567,"cybrom"]
// for(let v of emp){
//     console.log(v)
// }

// let p=[1,2,3,4,5,6,7,8,9,10]
// for( let v of p){
//     if(v%2==0){
//         console.log(v*v)
//     }
// }


// push, pop, unshift, shift, slice, splice
// let stu = ["Aniruddh","unmarried",18,"65kg","indore"]
// console.log(stu)
// let a = stu.slice(1,4)
// console.log(a)

// let stu = ["Aniruddh","unmarried",18,"65kg","indore"]
// console.log(stu)
// stu.splice(index No, no of elements, element )
// let a = stu.splice(2,1)
// console.log(stu)
// let b = stu.splice(2,0,19,"non")
// console.log(stu)


