"use strict";
const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];



function adultFilter(persons) {
  let adult = [];
  // for loop
  for (let i = 0; i < persons.length; i++){
    if (persons[i].age > 20) {
     adult.push(persons[i]);
    }
  }
  return adult;
// array filter methode
//   adult = persons.filter(persons =>persons.age > 20)
//   return adult;
}

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
