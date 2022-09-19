const prompt= require ('prompt-sync')();

let Numero1= prompt("Inserire primo numero: ");
let Number1=parseInt(Numero1);
let Numero2= prompt("inserire secondo numero: ");
let Number2=parseInt(Numero2);
let Operatore= prompt ("Inserire codice operazione 1 somma 2 sottrazione 3 moltiplicazione 4 divisione: ");
let operatore= parseInt(Operatore);

switch (operatore) {
    case 1 : 
        let somma = Number1 + Number2;
        console.log(somma);
        break;

    case 2 : 
        let sottrazione= 0;
        if (Number1 > Number2) {
            sottrazione= Number1 - Number2;
            console.log(sottrazione);
        } else {
            sottrazione= Number2 - Number1;
            console.log(sottrazione);
        }
        break;

    case 3 : 
        let moltiplicazione=Number1 * Number2;
        console.log(moltiplicazione);
        break;

    case 4 : 
        let divisione= 0;
        if (Number1 > Number2) {
            divisione= Number1 / Number2;
            console.log(divisione);
        } else {
            divisione= Number2 / Number1;
            console.log(divisione);
        }
        break;
    default: break;
}

