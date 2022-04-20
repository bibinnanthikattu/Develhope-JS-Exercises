const person = {
  
};

// console.log(person.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined
console.log(person.city);