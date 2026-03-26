function storedata(){
    // let name = document.getElementById("name").value
    // let age = document.getElementById("age").value
    // let city = document.getElementById("city").value
    // let contact = document.getElementById("contact").value
    // let course = document.getElementById("course").value

    localStorage.setItem("name",document.getElementById("name").value)
    localStorage.setItem("age",document.getElementById("age").value)
    localStorage.setItem("city",document.getElementById("city").value)
    localStorage.setItem("contact",document.getElementById("contact").value)
    localStorage.setItem("course",document.getElementById("course").value)


}

document.write("<br>")
let n = localStorage.getItem("name")
document.write(n,"<br>")
let n1 = localStorage.getItem("age")
document.write(n1,"<br>")
let n2 = localStorage.getItem("city")
document.write(n2,"<br>")
let n3 = localStorage.getItem("contact")
document.write(n3,"<br>")
let n4 = localStorage.getItem("course")
document.write(n4,"<br>")


document.getElementById("btn").addEventListener("click",clear);
function clear(){
    localStorage.clear()
}