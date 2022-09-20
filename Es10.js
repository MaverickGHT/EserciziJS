const prompt= require ('prompt-sync')();

let SceltaG1= prompt("Si scelga fra carta, forbice o sasso: ");
console.log("Questa è la scelta del G1: " + SceltaG1);

while (SceltaG1 != 'carta' || 'forbice' || 'sasso') {
    console.log("Scelta non corretta");
    console.log("Si prega di scegliere esattamente fra carta, forbice o sasso");
}

let SceltaG2= prompt("Si scelga fra carta, forbice o sasso");
console.log("Questa è la scelta del G2" + SceltaG2);

while (SceltaG2!= 'carta'|| 'forbice' || 'sasso') {
    console.log("Scelta non corretta");
    console.log("Si prega di scegliere esattamente fra carta, forbice o sasso");
}