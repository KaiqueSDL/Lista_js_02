const entrada = require('prompt-sync')({sigint:true}); 

// O custo de um carro novo consumidor é a soma do custo de fabrica com a porcentagem do distribuidor e dos impostos(aplicados ao custo de fabrica). Suponto que o percentual do distribuidor seja de 28% e os 45%, escrever um algoritmo para ler o custo de fabrica de um carro, calcular e escrever o custo final ao consumidor

var custoFabrica, custoConsumidor = 0;


console.log("CALCULADOR DE PREÇO DE UM CARRO");

custoFabrica = parseInt(entrada("Indique quanto custou esse automovel para o fabricante: "));

var distribuidor = custoFabrica * 0.28;
var imposto = custoFabrica * 0.45;

custoConsumidor = custoFabrica + (distribuidor + imposto);
console.log("R$ " , custoFabrica , " Custo fabrica");
console.log("R$ ",custoConsumidor, " Custo consumidor");


// custoConsumidor += ((custoFabrica * 0,28 ) + (custoFabrica * 0,45));