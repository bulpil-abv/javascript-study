// variables
//var fName = "Ivan"
const lName = "Ivanov"
let age = 40

fName = "Petar"
//lName = "Petrov"

/*
const lastName = prompt("Input name")
alert(lastName)
*/

const isReady = true
isReady ? console.log("All Ready") : console.log("All is not ready")

// Objects
const person ={
    firstName: "Ivan",
    lastName: "Ivanoff",
    year: 1990,
    languages:["Ru","En","De"],
    greet: function() {
        console.log("greet")
    }
}

console.log(person.firstName)
person.greet()
const key = 'languages'
console.log(person[key])

