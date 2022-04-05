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
const nickName = [];
function nicknameMap(persons) {
  // ...
  // for (let key of persons) {
  //   nickName.push(key.name + " - " + key.age);
  // }
  // console.log(nickName);
  for (let i = 0; i < persons.length; i++){
    nickName.push(`${persons[i].name} - ${persons[i].age}`);
    // console.log(persons[i].name);
  }
  return nickName;
}


const nicknames = nicknameMap(persons);
// console.log(persons);
console.log(nicknames);