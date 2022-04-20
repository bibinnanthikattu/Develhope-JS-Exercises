const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let value = Object.values(person);

// Logging as an array
console.log(value);

// Logging as in the question

value.forEach(value => console.log(value));



// Print values of person using Object.values