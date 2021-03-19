/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
2 step:
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
3 step:
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// inizializzo array squadre
var squadre = [
  {
    'nome': 'Juventus',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Roma',
    'puntiFatti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Sampdoria',
    'puntiFatti': 0,
    'falliSubiti': 0
  }
];
 // genero funzione per i numeri random per i punti e falli
 function generaNumeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// inserisco i valori del numero random nei punti
for ( var i = 0; i < squadre.length; i++){
  squadre[i].puntiFatti = generaNumeroRandom(1, 100);
}

// inserisco i valori dei numeri random per i falli subiti
for (var i = 0; i < squadre.length; i++){
  squadre[i].falliSubiti = generaNumeroRandom(1, 60);
}
// stampo i valori aggiornati
console.log(squadre);

var squadreAggiornate = [];

for (var i = 0; i < squadre.length; i++){  
  var oggetto = {
    'nome': squadre[i].nome,
    'falliSubiti': squadre[i].falliSubiti
  }
  squadreAggiornate.push(oggetto);
}
console.log(squadreAggiornate);
