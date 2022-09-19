const prompt= require ('prompt-sync')();

const br = "<br>"
let Nome= prompt ("Scriva il suo nome:");
let Cognome= prompt ("Scriva il suo cognome:");
let Età= prompt ("Scriva la sua età:");

if (Età > 0){
    console.log(Nome +" "+ Cognome +" "+ Età);
if (Età < 18) {
    console.log("è troppo giovane per votare");
} else {
    let Ncabine= 10;
    let Random= Math.random();
    let CabRandom= Math.round(Ncabine*Random);
    //console.log(CabRandom);
    console.log("La sua cabina è la Numero:"+ CabRandom);
}
} else {
    console.log("Formato età non valida");
}