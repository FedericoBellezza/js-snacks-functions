/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.
function sayHello(name) {
  return "Ciao " + name;
}

// * ARROW FUNCTION
arrowFunction = (name) => "Ciao " + name;

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHello("Mario"));
console.log(arrowFunction("Mario"));

//Risultato atteso se si passa 'Mario': // ciao Mario
