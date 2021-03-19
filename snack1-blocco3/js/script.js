/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore*/
// inizializzo l'array di oggetti
var bici = [
  {
    'marca': 'Bianchi',
    'peso': 5000
  },
  {
    'marca': 'Pininfarina',
    'peso': 4500
  },
  {
    'marca': 'Sava',
    'peso': 6000
  },
  {
    'marca': 'Pinarello',
    'peso': 6000
  }
];

// cerco la bici col peso minore e la stampo in console

var biciLight = bici[0];

for (var i = 0; i < bici.length; i++){
  if(bici[i].peso < biciLight.peso){
    biciLight = bici[i];
    console.log(bici[i]);
  }
}
