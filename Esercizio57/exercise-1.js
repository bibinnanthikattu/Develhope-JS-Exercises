const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  // code here
  return new Promise((resolve, reject) => {
    let info = persons.find((key) => key.id === id);
    if (info) {
     resolve( info);
    }else{
      reject("not a Valid ID");
    }
    //
  })
}
fetchPersonById(5).then(info => console.log(info)).catch((err)=>console.log(err));
fetchPersonById(1).then(info => console.log(info));
// code here