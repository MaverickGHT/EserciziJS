const prompt= require ('prompt-sync')();

let Saveduser= 'Mario';
let Savedpass= 'Rossi';

let Username= prompt("Inserire username: ");
let Password= prompt("Inserire la password: ");

if (Username != Saveduser) {
    console.log("Errore Username non riconosciuto");
} else if (Password !=Savedpass) {
    console.log("Errore Username o Password non corretti");
} else {
    console.log("Benvenuto");
}


