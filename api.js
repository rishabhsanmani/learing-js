// api :- application programming interface it is use to run third-party application in our webpage

// js is a light weight language it works fast it is a both syncronas and asyncronas
// js work like async when we use api

// syncronas programming language :- it execute line by line whether the line is taking 10 second or 10 minutes to execute
// asyncronas programming language :- it execute the line first which take less time to execute

// syntax :- fetch(URL,{methonds(http)})

// url :- uniform resource locator 

// http(hypertext transfer protocol) method :- get: to access , post: to insert , delete: to remove , put: to update , patch: to update 
// https (hypertext transfer protocol secure) 

// fetch returns promise
// promise :- has three state
// 1. Reject
// 2. Pending
// 3. Fullfill

// to handel promise we have two keyboards we have to use this both at same time otherwise error occurs
// 1. async
// 2. await

// `` is know as temp literals

// ---------------------------------------------------------------------------------------------------------------------------------------


async function access(){
    let d = await fetch('https://jsonplaceholder.typicode.com/comments')
    let s = await d.json()
    // let a = s.map((e)=>{return e.name})
    // console.log(a)
    // here e is event object
    let data = s.map((e)=>`                 
    <tr>
        <td> ${e.id} </td>
        <td> ${e.name} </td>
        <td> ${e.email} </td>
    </tr>

    `).join("")

    document.getElementById('showdata').innerHTML = data
}

access()


// Query Selector

let h= document.querySelector(".demo")
console.log(h);

// querySelectorAll()
