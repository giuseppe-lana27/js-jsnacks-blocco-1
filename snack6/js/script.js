/* Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/
// 1. chiedo all'utente di inserire un numero e lo inserisco nell'array
var numeroUtente = parseInt(prompt("Inserisci un numero"));
if (isNaN(numeroUtente)){
  numeroUtente = parseInt(prompt("Inserisci un numero in cifre"));
}
// 2. ciclo per elevamento al cubo e inizializzo variabile potenza
var potenza;
for (var i = 1; i < numeroUtente; i++){
  potenza = Math.pow(i, 3);
  console.log(potenza);
}
