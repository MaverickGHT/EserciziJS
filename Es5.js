const prompt= require ('prompt-sync')();

const Num1= 1;
let Sommaintermedia= 0;
let SommaTot= 0;

let M= prompt("Inserire il numero finale desiderato: ");

for (let i=1; i<=M; i++) {
    if (i%3 == 0){
    Sommaintermedia= Sommaintermedia + i;
    console.log(Sommaintermedia);
    } 
}

SommaTot= Sommaintermedia;
console.log("La somma Tot è: ");
console.log(SommaTot);
