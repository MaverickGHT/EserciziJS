const prompt= require ('prompt-sync')();

function Bisestile (x) {
    if (x%4==0) {
        return true;
    } else {
        return false;
    }
}

let anno = parseInt(prompt("Inserire un anno: "));
console.log ("L'anno inserito è: " + anno);

let Bis = Bisestile(anno);
console.log("Bisestile è: " + Bis);

if (Bis == true) {
    console.log("L'anno è bisestile");
} else {
    console.log("L'anno non è bisestile");
}

