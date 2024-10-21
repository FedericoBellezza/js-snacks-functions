/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function valueStartWith(gaveArray, char) {
  let resultArray = [];
  gaveArray.forEach((element) => {
    if (element[0] === char) {
      resultArray.push(element);
    }
  });
  return resultArray;
}

// * ARROW FUNCTION
arrowFunction = (gaveArray, char) => {
  let resultArray = [];
  gaveArray.forEach((element) => {
    if (element[0] === char) {
      resultArray.push(element);
    }
  });
  return resultArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(valueStartWith(names, "A"));
console.log(arrowFunction(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
