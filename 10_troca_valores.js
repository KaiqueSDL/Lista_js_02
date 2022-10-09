// Ler dois valores (inteiros, reais ou carateres) para as variaveis A eB, e efetuar a troca dos valores de forma que a variavel A passe a possuir o valor da variavel B e vice e versa, apresentar os valores trocados


const entrada = require('prompt-sync')({sigint:true});

var a,b,troca;

a = entrada("Digite a variavel A: ");
b = entrada("Digite a variavel B: ");

troca = a;
a = b;
b = troca;




console.log("a: " , a);
console.log("b: " , b);