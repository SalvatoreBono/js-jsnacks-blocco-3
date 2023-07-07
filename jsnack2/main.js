/* Snack 2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari. */
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < num.length; i++) {

    if (num[i] % 2) {
        const odd = document.getElementById("odd").innerHTML += `${num[i]}, `;
        console.log(`${num[i]} dispari`)
    } else {
        const even = document.getElementById("even").innerHTML += `${num[i]}, `;
        console.log(`${num[i]} pari`)
    }
}
