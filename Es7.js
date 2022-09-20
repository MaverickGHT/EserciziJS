const prompt= require ('prompt-sync')();

let PrimoFattore= 2;

let UltimoFattore= prompt("Inserire il numero dell'ultima tabellina: ");
let J= parseInt(UltimoFattore);
let Escludi= parseInt (prompt("Inserire tabellina da escludere: "));

for (let i=PrimoFattore; i<=J; i++) {
    if (i!=Escludi){
        for (let k=1; k<=10; k++) {
            let Tabellina= i*k;
            console.log(Tabellina);
        }
    console.log("");
    }
}


