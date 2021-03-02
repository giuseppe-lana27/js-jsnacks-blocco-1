/* Il software deve chiedere per 10 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri
inseriti.*/
// 1. chiedo all'utente di inserire dieci numeri
var primoNumero = parseInt(prompt("Inserisci il primo numero"));
if ( isNaN(primoNumero) ) {
  primoNumero = parseInt(prompt("Devi inserire un numero"));
}
var secondoNumero = parseInt(prompt("Inserisci il secondo numero"));
if ( isNaN(secondoNumero) ) {
  secondoNumero = parseInt(prompt("Devi inserire un numero"));
}
var terzoNumero = parseInt(prompt("Inserisci il terzo numero"));
if ( isNaN(terzoNumero) ) {
  terzoNumero = parseInt(prompt("Devi inserire un numero"));
}
var quartoNumero = parseInt(prompt("Inserisci il quarto numero"));
if ( isNaN(quartoNumero) ) {
  quartoNumero = parseInt(prompt("Devi inserire un numero"));
}
var quintoNumero = parseInt(prompt("Inserisci il quinto numero"));
if ( isNaN(quintoNumero) ) {
  quintoNumero = parseInt(prompt("Devi inserire un numero"));
}
var sestoNumero = parseInt(prompt("Inserisci il sesto numero"));
if ( isNaN(sestoNumero) ) {
  sestoNumero = parseInt(prompt("Devi inserire un numero"));
}
var settimoNumero = parseInt(prompt("Inserisci il settimo numero"));
if ( isNaN(settimoNumero) ) {
  settimoNumero = parseInt(prompt("Devi inserire un numero"));
}
var ottavoNumero = parseInt(prompt("Inserisci l\' ottavo numero"));
if ( isNaN(ottavoNumero) ) {
  ottavoNumero = parseInt(prompt("Devi inserire un numero"));
}
var nonoNumero = parseInt(prompt("Inserisci il nono numero"));
if ( isNaN(nonoNumero) ) {
  nonoNumero = parseInt(prompt("Devi inserire un numero"));
}
var decimoNumero = parseInt(prompt("Inserisci il decimo numero"));
if ( isNaN(decimoNumero) ) {
  decimoNumero = parseInt(prompt("Devi inserire un numero"));
}
// 2. inizializzo una variabile per la somma e stampo la somma dei dieci numeri
var somma;
somma = primoNumero + secondoNumero + terzoNumero + quartoNumero + quintoNumero + sestoNumero + settimoNumero + ottavoNumero + nonoNumero + decimoNumero;
console.log( "La somma dei numeri inseriti è: " + somma);
