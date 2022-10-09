const entrada = require('prompt-sync')({
    sigint: true
});

// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.  



var anos, mes,dia;

console.log("CALCULADOR DE DIAS DE VIDA");

console.log("Informe a sua idade");

anos = parseInt(entrada("Quantos anos de vida: "));
mes = parseInt(entrada("Quantos meses de vida: "));
dia = parseInt(entrada("Quantos dias de vida: "));


anos *= 365;
mes *= 30;
dia += (anos + mes);
console.log("dias de vida -> " , dia);