function sumUntil(maxValue) {
  let sum = 0;
  for (let i = 1; i <= maxValue; i++) {
    sum = i + sum;
  }
  return sum;
}

console.log(sumUntil(100));