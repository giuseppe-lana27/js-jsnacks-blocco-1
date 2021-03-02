/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array. */
// 1. inizializzo la variabile numero e l'array e chiedo all'utente di inserire 6 numeri
var numero;
var listaNumeri = [];
for ( var i = 0; i < 6; i++){
  numero = parseInt(prompt("Inserisci un numero"));
  // controllo se il numero è dispari
  if ( !isNaN(numero) && numero % 2 != 0) {
    listaNumeri.push(numero);
  }
}
// 2. stampo l'array con i numeri dispari
console.log(listaNumeri);
