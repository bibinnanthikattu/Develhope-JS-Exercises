function memoize(fn) {
    let cache = {
      
  };
  // ...

  return function(value)  {
    if (value in cache) {
        // return cache[value];
        return `Fetching from cache for ${cache[value]}`;
    }
    else {
      cache[value] = fn(value);
        return `calculating for ${cache[value]}`

        // return cache[value];
    } 

  }
  
}

function factorial(x) {
    // let result = 1;
  if (x === 0) {
    return 1;
  }  
      
 
    // console.log(result);
    return x * factorial(x - 1);

 
}
// console.log(factorial(6));
momoizeFactorial = memoize(factorial);
console.log(momoizeFactorial(10)); 
console.log(momoizeFactorial(6)); 
console.log(momoizeFactorial(5));

