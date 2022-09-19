const prompt= require ('prompt-sync')();

let PrimoFattore= 2;

let UltimoFattore= prompt("Inserire il numero dell'ultima tabellina: ");
let J= parseInt(UltimoFattore);

for (let i=PrimoFattore; i<=J; i++) {
    for (let k=1; k<=10; k++) {
        let Tabellina= i*k;
        console.log(Tabellina);
    }
    console.log("");
}

