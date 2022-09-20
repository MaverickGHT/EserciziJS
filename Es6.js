const prompt= require ('prompt-sync')();

let Numero1= prompt("Inserire primo numero: ");
let Number1=parseInt(Numero1);

let Numero2= prompt("inserire secondo numero: ");
let Number2=parseInt(Numero2);

let Operatore= prompt ("Inserire codice operazione 1 somma 2 sottrazione 3 moltiplicazione 4 divisione 5 radice ennesima 6 potenza: ");
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
    case 5:
        let radice=0;
        if (Number1 > 0){   
        radice= Math.pow(Number1, 1/Number2);
        console.log(radice);
    } else {
        console.log("Errore primo numero non positivo");
    }
        break;
    case 6:
        let potenza=0; 
        potenza= Math.pow(Number1, Number2);
        console.log(potenza);
        break;    
    default: break;
}

