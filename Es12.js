const prompt= require ('prompt-sync')();

function Bisestile (x) {
    if (x%4==0) {
        return true;
    } else {
        return false;
    }
}

function Indovina (x, bis) {
    if (bis == true && x == 1) {
        console.log("Hai indovinato è bisestile");
    } else if (bis == false && x == 1) {
        console.log("Spiaze ma non è bisestile");
    } else if (bis == true && x == 2) {
        console.log("Spiaze ma è bisestile");
    } else if(bis == false && x == 2) {
        console.log("Corretto, non è bisestile");
    }

}

let anno = parseInt(prompt("Inserire un anno: "));
//console.log ("L'anno inserito è: " + anno);

let Bis = Bisestile(anno);
//console.log("Bisestile è: " + Bis);

let sceltautente= parseInt(prompt("Prova a indovinare se è bisestile: 1 sì, 2 no: "));
console.log("Scelta utente prima del while: " + sceltautente);

while (sceltautente != 1) {
    if (sceltautente!=2){
    sceltautente= parseInt(prompt("Inserire solo 1 per sì o 2 per no"));
    console.log("Scelta utente dopo errore: " + sceltautente);
    } else {break;}
}

Indovina (sceltautente, Bis);

if (Bis == true) {
    console.log("L'anno è bisestile");
} else {
    console.log("L'anno non è bisestile");
}

