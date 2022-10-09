const entrada = require("prompt-sync")({sigint:true});

// Efetuar o calculo da quantidade de itros de combustivel gasta uma viagem, utilizando um automovel que faz 12km por litro para obter o calculo, o usuario deve fornecer o tempo gasto

var velocidadeMedia, distancia, tempo, combUtilizado = 0;
console.log("Seu carro faz 12km/l")
tempo = parseFloat(entrada("QUanto tempo voce levou nessa viagem: "));
velocidadeMedia = parseFloat(entrada("Qual foi a velocidade media: "));

distancia = (tempo * velocidadeMedia);

combUtilizado = (distancia / 12);

console.log("Velocidade média: " , velocidadeMedia);
console.log("Tempo gasto: " , tempo);
console.log("Distancia percorrida:  " , distancia , "KM");
console.log("Combustivel utilizado: " , combUtilizado , "L");