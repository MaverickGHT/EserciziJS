const prompt= require ('prompt-sync')();

let NumeroUtente= prompt("Inserire numero limite massimo: ");
let k= parseInt(NumeroUtente);
let divisione;
let counter2=0;

for (let i=1; i<=k; i++) {
    let counter=0;
    for (let j=1; j<=i; j++) {
        if (i%j==0) {
        divisione= i/j;  
        counter++;
        //console.log(divisione + " ");
        }
    }
    if (counter ==2) {
        console.log("Il numero è primo!"+ i );
        counter2++;
    }
    
}

console.log(counter2);