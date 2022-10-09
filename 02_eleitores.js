 const entrada = require('prompt-sync')({
     sigint: true
 });


 // Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.  



 var eleitores, brancos, nulos, validos;

 console.log("DIA DE ELEIÇÃO");

 validos = parseInt(entrada("Houve quantos votos validos: "));
 brancos = parseInt(entrada("Houve quantos votos brancos: "));
 nulos = parseInt(entrada("Houve quanto votos nulos: "));

 eleitores = (validos + brancos + nulos);

 console.log("No municipio tem: ", eleitores , "eleitores!!");