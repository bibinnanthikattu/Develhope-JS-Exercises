class Person {
  // ...
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
  }
 
  set firstName(name) {
    this._firstName = name;
  }
  get firstName() {
    return  this._firstName
   }
  set lastName(name) {
    this._lastName = name;
  }
  get lastName() {
    return this._lastName;
  }
  set age(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }
  get fullName() {
   return `${this._firstName}  ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);