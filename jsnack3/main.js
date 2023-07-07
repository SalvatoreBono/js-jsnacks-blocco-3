/* Snack 3 (bonus)
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo. */
const N = parseInt(prompt("Quante array vuoi aggiungere?"));
//mettendo N saremo noi ad impostare quante array si vogliono aggiungere tramite il prompt
for (let i = 0; i < N; i++) {
    const array = [];
    // impostiamo che i numeri che devono essere creati all'intenrno della array devono essere massimo 10
    for (let a = 0; a < 10; a++) {
        // faccio in modo che vengono generati all'interno della array numeri random da 1 a 100
        const num = Math.floor(Math.random() * 100) + 1;
        //innesto il num all'interno della array
        array.push(num);
    }
    //metto array FUORI dal secondo for così che mi stampa "SOLO" il risultato finale e non tutto il ciclo del secondo for
    console.log(array)
}