/* Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero. */
// 1. chiedo un numero di 4 cifre all'utente
var numeroUtente = prompt("Inserisci un numero di quattro cifre");
// 2. inizializzo una variabile somma per fare la somma delle cifre del numero
var somma = 0;
for ( var i = 0; i < numeroUtente.length; i++){
  somma += parseInt(numeroUtente[i]);
}
console.log(somma);
