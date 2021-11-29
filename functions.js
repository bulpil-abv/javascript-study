const cars = ['mazda', 'ford', 'BMW']

cars.push('renault')
console.log(cars)
cars.unshift('volga')
console.log(cars)
const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(cars)
console.log(firstCar)
console.log(lastCar)

//Reverse string

const text = 'Hello, we study JavaScript'
const reverseText = text.split('').reverse().join('')
console.log(text)
console.log(reverseText)

//Array of objects
const people = [
    {name: 'ivan', budget: 4200},
    {name: 'elena', budget: 3500},
    {name: 'vlado', budget: 4200}
]
// find person with budget 3500
const index = people.findIndex(function (person) {
    return person.budget === 3500
})

console.log(people[index])

//The same but with a for cycle
let foundPerson
//console.log(typeof (foundPerson))
for (const person of people){
    if (person.budget === 3500) {
        foundPerson = person
    }
}

console.log(foundPerson)

//Lambda
const person = people.find(person => person.budget === 3500)
console.log(person)