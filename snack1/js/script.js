// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// 1. chiedo all'utente di inserire il primo numero
var primoNumero = parseInt(prompt("Inserisci il primo numero"));
if ( isNaN(primoNumero) ) {
  primoNumero = parseInt(prompt("Devi inserire un numero"));
}
// 2. chiedo all'utente di inserire il secondo Numero
var secondoNumero = parseInt(prompt("Inserisci il primo numero"));
if ( isNaN(secondoNumero) ) {
  secondoNumero = parseInt(prompt("Devi inserire un numero"));
}
// 3. visualizzo i due numeri
console.log(primoNumero);
console.log(secondoNumero);
// 4. confronto i due numeri per vedere quale sia il Maggiore
if (primoNumero > secondoNumero){
  console.log("il numero maggiore è: " + primoNumero);
} else if (primoNumero == secondoNumero ){
  console.log("il numeri sono uguali");
} else {
  console.log("il numero maggiore è: " + secondoNumero);
}
