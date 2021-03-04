/* crea due array che hanno un numero di elementi diversi. aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà tanti quanti l'altro. */
// 1. inizializzo i due array
var primoArray = [5, 8, 6, 4, 2, 1, 7];
var secondoArray = [11, 12, 19];
// 2. inserisco elementi nel secondo array fino a quando hanno entrambi stessa lunghezza
var i;
var numeroRandom;
for (i = 3; i < primoArray.length; i++ ){
  numeroRandom = Math.ceil(Math.random() * 10);
  secondoArray.push(numeroRandom);
}
console.log(primoArray);
console.log(secondoArray);
