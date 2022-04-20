function calculate() {
     // ...
     return total = {
          result: 0,
          add(num) {
               // console.log(this.result);
               this.result += num;
               return this;
          },
          multiply(num) {
               // console.log(this.result);
               this.result *= num;
               return this;
          },
          sub(num) {
               this.result -= num;
               return this;
          }, divide(num) {
               this.result /= num;
               return this;
          }, printResult() {
               console.log(this.result); 
          }
     
     }
}

const calculator = calculate();


calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult();
















// function person() {
//      return mariya = {
//           char: "oola",
//           glmr: "no",
//           skill: "thalayanamanthram",
//           style: 'panichi',
//           mariyaChar(no) {
//                this.char += " "+no;
//                return this
//           },
//           mariyaGlmr() {
//                return this.char;
//           }
//      }
// }


// const callMariya = person();
// console.log(callMariya.mariyaChar("monna").mariyaChar("begid").mariyaGlmr());