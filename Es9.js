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

let ParolaImpiccato = Parole[i];
console.log(ParolaImpiccato);

let ArrayImpiccato = ParolaImpiccato.split ("");

/*for (let k=0; k < ArrayImpiccato.length; k++) {
    console.log(ArrayImpiccato[k]);
}*/

console.log("Indovina la parola: " + "-".repeat(ArrayImpiccato.length));

let ParolaIndovinata= false;
let lettera=[0];
let parola= [0];

while (ParolaIndovinata==false) {
    for (let k=0; k<ArrayImpiccato.length; k++) {
        for (let j=0; j<ArrayImpiccato.length; j++) {
            console.log(parola[j]);
        }
        lettera[k]= prompt("Prova a indovinare la lettera o la parola: ");
         for (let m=0; m<ArrayImpiccato.length; m++){
         if (lettera[k]== ArrayImpiccato[m]) {
            //console.log(lettera[k]);
            parola[m]= lettera[k];
        } else {
            //console.log("-");
            }
        } 
        
    }
    for (let n=0; n<ArrayImpiccato.length; n++) {
        if (parola [n] == ArrayImpiccato [n]){
            ParolaIndovinata=true;
        } else {
            ParolaIndovinata=false;
            break;
        }
     }
}


console.log("Complimenti hai indovinato la parola");