/* Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti.*/
// 1. chiedo all'utente di inserire dieci numeri
var somma = 0;
for (var i = 0; i < 10; i++){
  var numero = parseInt(prompt("Inserisci un numero"));
  somma = somma + numero;
}
// 2. stampo la somma dei dieci numeri
console.log( "La somma dei numeri inseriti è: " + somma);
