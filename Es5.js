const prompt= require ('prompt-sync')();

let Sommaintermedia= 0;

let M= prompt("Inserire il numero finale desiderato: ");
let CasoSwitch= prompt("Digita 1 per avere 3 e 7 come sottomultipli, altrimenti digita 2 ");
let SottoMultiplo= prompt ("Scegli il secondo sottomultiplo: ");

switch (CasoSwitch)  {
case 1 : 
    for (let i=1; i<=M; i++) {
        if (i%3 == 0 && i%7 == 0){
        console.log(i);   
        Sommaintermedia= Sommaintermedia + i;
        //console.log(Sommaintermedia);
        } 
    }
    console.log("La somma Tot è: " + Sommaintermedia);
break;

default: 
    for (let i=1; i<=M; i++) {
        if (i%3 == 0 && i%SottoMultiplo == 0){
        console.log(i);   
        Sommaintermedia= Sommaintermedia + i;
        //console.log(Sommaintermedia);
        } 
    }
    console.log("La somma Tot è: " + Sommaintermedia);
break;

}
