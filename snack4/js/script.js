/* In un array sono contenuti i nomi degli invitati alla festa del
grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
può partecipare o no alla festa. */
// 1. inizializzo array invitati
var invitati = ["Samuele", "Andrea", "Giuseppe", "Tommaso", "Francesca", "Lorena", "Gianluca", "Gianluigi", "Caterina", "Alessio", "Clelia", "Alessandro", "Matia", "Gabriele", "Matteo", "Giorgio", "Nicolas", "Davide", "Daniele", "Beatrice"];
// 2. chiedo all'utente il suo nome e inizializzo variabile per controllo
var nome = prompt("Inserisci il tuo nome");
var presente = false;
// 3. controllo se il nome è in lista
for(var i = 0; i < invitati.length; i++){
  if (nome.toLowerCase() == invitati[i].toLowerCase()){
    presente = true;
  }
}
// 4. do il permesso all'utente di entrare
if (presente == true) {
  console.log("Puoi entrare alla festa");
} else {
  console.log("Non puoi entrare alla festa")
}
