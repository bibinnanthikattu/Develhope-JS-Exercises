"use strict";
const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  // ...
  return students.push(student);
  // returning a new array
}

addStudent('Marco');
console.log(students);