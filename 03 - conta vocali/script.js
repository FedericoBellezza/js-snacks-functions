/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = "javascript";

// Dichiara la funzione qui.
function howManyVowels(string) {
  let resultArray = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      resultArray++;
    }
  }
  return resultArray;
}

// * ARROW FUNCTION
arrowFunction = (string) => {
  let resultArray = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      resultArray++;
    }
  }
  return resultArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(howManyVowels("javascript"));
console.log(arrowFunction("javascript"));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
