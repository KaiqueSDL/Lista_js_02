const entrada = require("prompt-sync")({sigint: true});

//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.  

console.log("CALCULADOR DE REAJUSTE SALARIAL");

// Criando variaveis para guardar os valores
var salarioAtual, novoSalario, reajuste;

//Pedindo esses valores de salario atual e reajuste 
salarioAtual = parseInt(entrada("Informe quanto voce ganha: "));
reajuste = parseInt(entrada("Quantos % de reajuste: "));


// Transformando a porcentagem em decimal
reajuste /= 100;

// Juntando o adicional de reajuste com o salario atual
novoSalario = (salarioAtual + (salarioAtual * reajuste));

// mostrando para o usuario
console.log(novoSalario);
