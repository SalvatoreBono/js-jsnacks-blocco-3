/* Snack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50. */
const num = [];
let sum = 0;
//fino a che sum è minore di 50 ripeti
while (sum < 50) {
    const userNumber = parseInt(prompt("Inserisci un numero"));
    num.push(userNumber);
    sum += userNumber;
}
console.log(sum)
