function calculate() {
  let number = 1 ;
  return {
    add: function(input) {
      number = number + input;
      return this;
    },
    sub: function(input) {
     number = number - input;
     return this;
    },
    multiply: function(input) {
      number = number * input;
      return this;
    },
    divide: function(input) {
    number = number / input;
    return this;
    },
    printResult: function() {
      console.log(number);
      return this;
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7