/* Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. */
const num = [];
let somma = 0;
while (somma < 50) {
    const userNumber = parseInt(prompt("Quanti numeri vuoi inserire?"));
    num.push(userNumber);
    somma += userNumber;
}
console.log(somma)
