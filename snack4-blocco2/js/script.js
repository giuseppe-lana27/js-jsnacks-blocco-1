/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/
// 1. creo array numeri interi
var interi = [2, 3, 5, 16, 18, 32, 15, 55, 100, 24, 72, 27];
var i;
var somma = 0;
for ( i = 0; i < interi.length; i++ ){
  if ( i % 2 != 0){
    console.log(interi[i]);
    somma += interi[i];
  }
}
console.log(somma);
