function sum(...numbers) {
  let result = 0;
  numbers.forEach(element =>result +=element);
  return result; 
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));