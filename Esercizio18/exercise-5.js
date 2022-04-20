function memoize(fn) {
    let cache = {
      
  };
  // ...
  return (value) => {
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

function calcfactorial(x) {
    let result = 1;
  if (x === 0) {
    return 1;
  } else {
      
      result =  (x * calcfactorial(x - 1));
        return result ;
    }
 
}
// console.log(factorial(6));
factorial = memoize(calcfactorial);
console.log(factorial(10)); 
console.log(factorial(6)); 
console.log(factorial(7));

