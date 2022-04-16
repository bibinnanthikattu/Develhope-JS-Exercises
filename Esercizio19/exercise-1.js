const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1; 

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?
// Perché creando il secondo oggetto con la costante 
// "person2 = person1", le rendi vincolate tra loro, per 
// questo sarebbe più opportuno creare il secondo oggetto
// copiando il primo e cambiando solo la proprietà "firstName".