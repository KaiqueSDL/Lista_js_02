const entrada = require('prompt-sync')({sigint:true});


// ler uma temperatura em graus Fahrenheit e apresenta-la convertida em graus celsius. A formula de conversao é C=(F-32)*(5/9),sendo F a temperatra em Fahrenheit e C a temperatura em Celsius

var celsius,fah;

console.log("Conversão de Fahrenheit para celsius");

fah = parseFloat(entrada("Indique quantos Fahrenheits está: "));

celsius = (fah-32)*(5/9);

console.log(celsius);