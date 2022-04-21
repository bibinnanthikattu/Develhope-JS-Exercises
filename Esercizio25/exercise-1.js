const person = {
  get firstName() {
    return this.firstName
     },
     get lastName() {
       return this.lastName
        },
        set firstName(firstName) {
        this.firstName = firstName
        },
        set lastName(lastName) {
          this.lastName = lastName
        },
     fullName() {
    return `${this.firstName} ${this.lastName}`
     }
}

let john = Object.create(person);
let simon = Object.create(person);

john.fullName = 'John Doe';
simon.fullName = 'Simon Collins';

console.log(john.fullName);
console.log(simon.fullName);

//console.log(john.fullName()); // John Doe
//console.log(simon.fullName()); // Simon Collins