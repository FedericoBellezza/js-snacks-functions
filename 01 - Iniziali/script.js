/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function arrayOfFirtsChar(gaveArray) {
  let resultArray = [];
  gaveArray.forEach((currentValue) => {
    resultArray.push(currentValue[0]);
  });
  return resultArray;
}

// * ARROW FUNCTION
arrowFunction = (gaveArray) => {
  let resultArray = [];
  gaveArray.forEach((currentValue) => {
    resultArray.push(currentValue[0]);
  });
  return resultArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(arrayOfFirtsChar(names));
console.log(arrowFunction(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
