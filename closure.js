//Closure

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Petroff')
console.log(logWithLastName('Petar'))
