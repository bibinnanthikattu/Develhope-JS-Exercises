const person = {
  // ...
  firstName: '',
  lastName:'',
  get fullName() {
    return `${this.firstName} ${this.lastName}`; 
  },
  set fullName(name) {
    [this.firstName,this.lastName]=name.split(" ")
  }
}
let john = Object.create(person);
let simon = Object.create(person);
john.fullName = 'John Doe';
simon.fullName='Simon Collins'
console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins
