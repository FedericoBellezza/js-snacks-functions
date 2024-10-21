/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function sayHello(User) {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 13 && hours > 0) {
    return "Buongiorno " + User;
  } else if (hours >= 13 && hours < 17) {
    return "Buon pomeriggio " + User;
  } else {
    return "Buonasera " + User;
  }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(sayHello("Mario"));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
