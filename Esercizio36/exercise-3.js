class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
 static fromObject(obj) {
    return new Person(obj.firstName, obj.lastName);
  }

}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const men = Person.fromObject(obj);

console.log(`${men.firstName} ${men.lastName}`);