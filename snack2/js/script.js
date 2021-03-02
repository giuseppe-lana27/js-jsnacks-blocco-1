/* L’utente inserisce due parole in successione, con due
prompt. Il software stampa prima la parola più corta, poi la
parola più lunga.
*/
// 1. chiedo all'utente la prima parola
var primaParola = prompt("Inserisci la prima parola");
// 2. chiedo all'utente la seconda parola
var secondaParola = prompt("Inserisci la seconda parola");
// 3. stampo le due parole
if (primaParola.length < secondaParola.length){
  console.log(primaParola);
} else if (primaParola.length > secondaParola.length) {
  console.log(secondaParola);
} else {
  console.log("le parole hanno la stessa lunghezza")
}
