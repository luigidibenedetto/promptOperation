let persona = {
    firstName: 'Luigi',
    lastName: 'Di Benedetto',
    isItalian: true,
    age: 39
  };

let chiaveObject = prompt("Inserire una chiave per l\'oggetto persona: ");
let valoreChiave = prompt("Inserire un valore per la chiave: ");

persona[chiaveObject] = valoreChiave;

console.log('Inserimento effettuato: ', persona[chiaveObject] );
console.log('nuovo oggetto persona: ', persona );