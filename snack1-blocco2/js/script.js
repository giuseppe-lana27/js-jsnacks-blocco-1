/* Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while. */

// ciclo for
// 1. inizializzo un array in cui inserire i numeri da chiedere all'utente
// var numeri = [];
// // 2. chiedo all'utente di inserire 5 numeri e li inserisco nell'array
// var numero;
// for ( var i = 0; i < 5; i++) {
//   numero = parseInt(prompt("Inserisci un numero"));
//   if (isNaN(numero)){
//     numero = parseInt(prompt("Inserisci un numero in valore numerico"));
//   }
//   numeri.push(numero);
// }
// console.log(numeri);
// // 3. inizializzo la variabile somma e faccio la somma dei numeri in array
// var somma = 0;
// for ( i = 0; i < numeri.length; i++){
//   somma = somma + numeri[i];
// }
// console.log(somma);


// ciclo while
// 1. inizializzo un array in cui inserire i numeri da chiedere all'utente
var numeri = [];
// 2. chiedo all'utente di inserire 5 numeri e li inserisco nell'array
var numero;
var i = 0;
do {
  numero = parseInt(prompt("Inserisci un numero"));
  if (isNaN(numero)){
    numero = parseInt(prompt("Inserisci un numero in valore numerico"));
  }
  i++;
  numeri.push(numero);
} while ( i < 5);
console.log(numeri);
// 3. inizializzo la variabile somma e faccio la somma dei numeri in array
var somma = 0;
// somma dei numeri in ciclo while
do {
  somma = somma + numeri[i];
  i++;
} while ( i < numeri.length );
console.log(somma);
