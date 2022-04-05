function calculateAverageAge(persons) {
  // ...
  let sum = 0;
  let average = 0;
  // for (let age of persons) {
  //   sum += age.age;
  // }
  persons.forEach(element => {
    sum += element.age;
  });
  average = sum / persons.length;
  return average;
}

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

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);