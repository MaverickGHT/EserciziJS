const prompt= require ('prompt-sync')();

let Numero1= prompt("Inserire primo numero");
let Numero2= prompt("inserire secondo numero");
let Operatore= prompt ("Inserire codice operazione: 1 somma, 2 sottrazione, 3 moltiplicazione, 4 divisione");


switch (Operatore) {
    case 1: {
        let somma = Numero1 + Numero2;
        console.log(somma);
    }
    case 2: {
        let sottrazione= 0;
        if (Numero1 > Numero2) {
            sottrazione= Numero1 - Numero2;
            console.log(sottrazione);
        } else {
            sottrazione= Numero2 - Numero1;
            console.log(sottrazione);
        }
    }
    case 3: {
        let moltiplicazione=Numero1 * Numero2;
        console.log(moltiplicazione);
    }
    case 4: {
        let divisione= 0;
        if (Numero1 > Numero2) {
            divisione= Numero1 / Numero2;
        } else {
            divisione= Numero2 / Numero1;
        }
        console.log(divisione);
    }
}