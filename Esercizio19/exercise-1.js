const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

// shallow copy, actually it isn't copying the value, memory allocation for the object of the variable are same.So if we change one value it changes for all copied variables.

person2.firstName = "Simon";
console.log(person1);
console.log(person2);