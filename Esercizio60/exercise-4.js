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
    let person = persons.find(key => key.id === id);
    if (!person) {
      reject(`Not found the person`);
    } else {
      resolve(person)
    }
  })
}
// fetchPersonById(5).then(person => console.log(person)).catch(err => console.log(err));

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    let job = jobs.find(key => key.id === id);
    if (!job) {
      reject(`not found the job for id : ${id}`);
    } else {
      // returns the respected object for the id
      // resolve(job);
      
      // returns the job type
      resolve(job.jobTitle);
    }
  })
}
// fetchJobById(1).then(job=>console.log(job)).catch(err=>console.log(err))
Promise.all([fetchPersonById(1), fetchJobById(1)]).then(values => console.log(values)).catch(err => console.log(err));
Promise.all([fetchPersonById(1), fetchJobById(5)]).then(values => console.log(values)).catch(err => console.log(err));