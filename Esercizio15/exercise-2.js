function pow(base) {
  // ...
  return (exp) => {
   // console.log(base);
    // console.log(exp);
    let power = 1;
    for (exp ; exp > 0; exp--){
      power *= base;
    } 
    return power;
   
  }
}

const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));
console.log(pow2(3));


console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));
