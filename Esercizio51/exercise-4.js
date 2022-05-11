const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// using array methods
const toArray = Object.entries(person);
const filteredPerson = toArray.filter(value => !(isNaN(value[1])));
// console.log(filteredPerson);
const toObj = filteredPerson.flat();
// console.log(toObj);

const json = JSON.parse( JSON.stringify(person,toObj));

console.log(json); // Should return: { id: 1, age: 25 }