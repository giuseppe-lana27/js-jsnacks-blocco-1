/* stampa le potenze da 2 a 1000 */
// dichiaro le variabili
var i = 0;
var risultatoPotenza;
// calcolo le potenze
do {
  risultatoPotenza = Math.pow(2, i);
  i++;
  if (risultatoPotenza < 1000) {
    console.log(risultatoPotenza);
  }
} while (risultatoPotenza <= 1000);
