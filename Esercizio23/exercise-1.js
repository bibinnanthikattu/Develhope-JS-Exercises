const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let newArray = Object.keys(person);

for (let i = 0; i < newArray.length; i++) {
console.log(`${newArray[i]}: ${person[newArray[i]]}`)
}

// Print values of person using Object.keys