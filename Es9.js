const prompt= require ('prompt-sync')();

let Parole= ['Gatto', 'Cane', 'Pesce', 'Topo', 'Elefante', 'Mucca', 'Cavallo', 'Asino', 'Coniglio', 'Piccione', 'Lupo'];
let i= Math.round(Math.random()*10);

console.log(i);
let Animale= Parole[i];

let Scelta = prompt("indovina l'animale: Gatto, Cane, Pesce, Topo, Elefante, Mucca, Cavallo, Asino, Coniglio, Piccione, Lupo: ");

console.log("Hai scelto: " + Scelta);

if (Scelta==Animale) {
    console.log("Complimenti hai indovinato!");
} else {
    console.log("Ritenta sarai più fortunato");
}