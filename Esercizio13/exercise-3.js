const sum = (a, b)=>  a + b;
  
const subtract = (a, b)=>  a - b;
  
const multiply = (a, b)=>  a * b;
  
const divide = (a, b)=>  a / b;
  
const log = (value) => console.log(value);
let sum1 = sum(2, 4);
let sum2 = sum(5, 2);
let mult = multiply(sum1, sum2)
let sub = subtract(mult, 2);
let result = divide(sub, 5);
log(result);
