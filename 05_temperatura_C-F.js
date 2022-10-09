const entrada = require('prompt-sync')({ sigint: true });

//ler uma temperatura em graus celsius e apresenta-la convertida em graus Fahrenheit. A formula de ocnversao é F = (9*C + 160) / 5,  sendo F a temperatura em Fahrenheit e C a temperatura e Celsius

var celsius, fah = 0;

console.log("Conversao de graus celsius para Fahrenheit");

celsius = parseFloat(entrada("Indique quantos graus celsius: "));

fah = (celsius * 9 / 5) + 32;

console.log(fah);
