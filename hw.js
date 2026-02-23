// for(let r=1; r<=1; r++){
//     for(let c=1; c<=5; c++){
//         document.write("*")   
//     }
//     document.write("<br>")
// }
// for(let a=1; a<=3; a++){
//       document.write("*","&nbsp &nbsp&nbsp&nbsp&nbsp","*")
//       document.write("<br>")  
// }
// for(let r=1; r<=1; r++){
//     for(let c=1; c<=5; c++){
//         document.write("*")   
//     }
//     document.write("<br>")
// }


// document.write("<br>")
// document.write("<br>")


// for(let r=1; r<=1; r++){
//     for(let c=1; c<=5; c++){
//         document.write("*")
//     }
//     document.write("<br>")
//     for(let a=1; a<=4;a++){
//        document.write("&nbsp &nbsp &nbsp &nbsp","*") 
//        document.write("<br>")
//     }
// }

for(let r=1; r<=5; r++){
    for(let c=1;c<=5; c++){
        if(r==1 || c==3){
            document.write("*")
        }
        else{
            document.write("&nbsp ")
        }
    }
    document.write("<br>")
}

