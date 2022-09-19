const prompt= require ('prompt-sync')();

const Num1= 1;
let Sommaintermedia= 0;
let SommaTot= 0;
let Moltiplicazione= 1;

let N= prompt("Inserire il numero finale desiderato: ");

for (let i=1; i<=N; i++) {
    Sommaintermedia= Sommaintermedia + i;
    console.log(Sommaintermedia);
    Moltiplicazione= Moltiplicazione * i;
}

SommaTot= Sommaintermedia;
console.log("La somma Tot è: ");
console.log(SommaTot);
console.log("La moltiplicazione Tot è: ");
console.log(Moltiplicazione);