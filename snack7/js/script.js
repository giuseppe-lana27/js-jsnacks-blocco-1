/* stampa le potenze da 2 a 1000 */
// dichiaro le variabili
var i = 0;
var risultatoPotenza;
do {
  risultatoPotenza = Math.pow(2, i);
  i++;
  console.log(risultatoPotenza);
} while (i < 10 && risultatoPotenza < 1000);
