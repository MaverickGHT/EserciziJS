const prompt= require ('prompt-sync')();

let i= parseInt(prompt("Inserire dimensioni lista: "));

let lista = [i];
let maxNum=0;

let Numero= parseInt(prompt("Inserire il numero nella pos " + (1) + ": "));
lista[0]= Numero;
let minNum=Numero;

let media=0;
let somma=Numero;

for (let k=1; k<i; k++) {
    let Numero= parseInt(prompt("Inserire il numero nella pos " + (k+1) + ": "));
    lista[k]= Numero;
    if (maxNum<Numero){
        maxNum=Numero;
    }
    if (minNum>Numero) {
        minNum=Numero;
    }
    somma= somma+Numero;
}

for (let j=0; j<i; j++) {
    console.log(lista[j]);
}

console.log("La somma dei numeri è: " + somma);
media = somma/lista.length;
console.log("La media dell'array è: " + media);

console.log("Il numero massimo è: " + maxNum);
console.log("Il numero minimo è: " + minNum);
let differenzamedia=0;

if (lista [0] < media) {
    differenzamedia= media- lista[0];
} else {
    differenzamedia= lista [0] - media;
}
let differenzasalvata= differenzamedia;
let NumeroVicino= lista [0];

for (let n=1; n<lista.length; n++) {
    if (lista [n] < media) {
         differenzamedia= media- lista[n];
        } else {
            differenzamedia= lista [n] - media;
        }
    if (differenzamedia < differenzasalvata) {
        differenzasalvata=differenzamedia;
        NumeroVicino= lista [n];
    }
}

console.log ("Il Numero più vicino alla media è: " + NumeroVicino);

if (differenzasalvata==0) {
    console.log("Il numero è presente nell'array ed è: " + NumeroVicino);
} else {
    console.log("Il numero non è presente nell'array");
}
