let person = {
    name : "rishabh",
    age : 19,
    city: "chhindwara",
    contact_No : 1234567899
}

localStorage.setItem("userdata",JSON.stringify(person))

let val = localStorage.getItem("userdata")
let fnl = JSON.parse(val)
console.log(fnl)
console.log(fnl.contact_No)
