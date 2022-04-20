function getKeys(obj) {
  // ...
  const key=[]
  for (let keys in person) {
    key.push(keys);
  }
  return key;
  // const objToArr = Object.keys(obj);
  // return objToArr;

 
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