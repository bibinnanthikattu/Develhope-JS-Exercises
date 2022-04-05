function getKeys(obj) {
  // ...

  const objToArr = Object.keys(obj);
  return objToArr;
 
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);