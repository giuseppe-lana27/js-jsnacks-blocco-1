/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/
// 1. creo array numeri interi
var interi = [2, 3, 5, 16, 18, 32, 15, 55, 100, 24, 72, 27, 99, 127, 256, 37];
var i;
var somma = 0;
for ( i = 0; i < interi.length; i++ ){
  // ricerco gli elementi di posto dispari e li sommo
  if ( i % 2 != 0){
    console.log(interi[i]);
    somma += interi[i];
    document.getElementById('lista').innerHTML += "<li>" + interi[i] + "</li>";
  }
}
console.log(somma);
document.getElementById('somma').innerHTML = " " + somma;
