// Number
console.log('Max integer, from constant: ' + Number.MAX_SAFE_INTEGER)
console.log('Max integer, calculated: ' + (Math.pow(2, 53) - 1))
console.log('Min integer, from constant: ' + Number.MIN_SAFE_INTEGER)

const cars = new Array('Mazda', 'Mercedes', 'Ford')
const trucks = ['Volvo', 'Tatra', 'MAN']

for (let i = 0; i < cars.length; i++) {
    const car = cars[i]
    console.log(car)
}

for (let truck of trucks) {
    console.log(truck)
}

console.log(0.4 + 0.2)
console.log(parseFloat((0.4 + 0.2).toFixed(1)))
console.log(+(0.4 + 0.2).toFixed(1))


//Strings
const name = 'Fluf'
const age = 43

function getAge() {
    return age
}

const output = `Hello, my name is ${name} and my age is ${getAge()}.`
console.log(output)
console.log(`My name is ${name.length} letters long.`)

//Arrow function
const arrow = () => {
    console.log('Hello -', name)
}

arrow()