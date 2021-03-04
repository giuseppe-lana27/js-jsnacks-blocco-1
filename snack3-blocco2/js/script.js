/* Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.*/
// 1. inizializzo gli array dei nomi e cognomi
var nomi = ["Giuseppe", "Carlo", "Francesca"];
var cognomi = ["Lana", "Madrigali", "Urso"];
// 2. genero un nome random
var nomeCompleto;
var i;
var lista = [];
for ( i = 0; i <= 2; i++){
  // creazione indici random
  var indiceNomeRandom = Math.floor(Math.random() * nomi.length);
  var indiceCognomeRandom = Math.floor(Math.random() * cognomi.length);
  // creo il nome completo con gli indici random
  nomeCompleto = nomi[indiceNomeRandom] + " " + cognomi[indiceCognomeRandom];
  // inserisco i nomi nella lista
  lista.push(nomeCompleto);
}
console.log(lista);
