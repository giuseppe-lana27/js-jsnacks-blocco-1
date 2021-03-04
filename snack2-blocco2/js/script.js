/* Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo  */
// 1. chiedo all'utente un numero
var numero;
do{
  numero = parseInt(prompt("Inserisci un numero"));
} while (isNaN(numero));
// 2. controllo se il numero è pari e lo stampo, se dispari stampo il successivo
if (numero % 2 == 0) {
  console.log(numero);
} else {
  numero = numero + 1;
  console.log(numero);
}
