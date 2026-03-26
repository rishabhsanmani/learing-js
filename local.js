// local storage

// -> setItem(), getItem(), removeItem(), clear()
// formate -> key & value

localStorage.setItem("data","my name")
localStorage.setItem("person","Code....")

let n = localStorage.getItem("person")
document.write(n)

localStorage.removeItem("data")
localStorage.clear()