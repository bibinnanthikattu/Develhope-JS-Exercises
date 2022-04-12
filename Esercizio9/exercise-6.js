function getKeys(obj) {
  for (let keyss in person)
  console.log(keyss)
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);