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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = persons.find(key => key.id === id);
      return (person ? resolve(person) : reject(`Not found the person of id ${id}`));
    },1000)
  })
}
// fetchPersonById(2).then(person=>console.log(person)).catch(err=>console.log(err));
function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let job = jobs.find(key => key.id === id);
      return(!job ? reject(`not found the job of the id : ${id}`) : resolve(job.jobTitle))
    },500)
  })
}
// fetchJobById(2).then(job => console.log(job)).catch(err => console.log(err));
Promise.race([fetchPersonById(2), fetchJobById(1)]).then(result => console.log(result)).catch(err => console.log(err));