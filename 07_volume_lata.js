// Calcular e apresentar o valor do volume de uma lata de leo utilizando a formula: volume  = pi*raio2*altura

const entrada = require('prompt-sync')({ sigint: true });

var volume, raio, altura = 0;

console.log("Calculador de volume");

raio = parseFloat(entrada("Qual o raio dessa lata: "));
altura = parseFloat(entrada("Qual a altura dessa lata: "));

// (Math.pow(raio,2)) 
volume = 3.14 * Math.pow(raio, 2) * altura;

console.log(volume);
