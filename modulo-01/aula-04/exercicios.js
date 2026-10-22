/* 
QUAL LAÇO USAR
-> FOR: quando sei QUANTAS vezes (contar, tabuada, percorrer uma lista)
-> WHILE: repito até algo acontecer (senha, palpite)
-> DO-WHILE: como o while, mas roda apenas uma vez

Todos se repetem; muda o "quando eu testo a condição" 
*/

//conte de 5 até 1 e escreva Já
for (i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Já");

console.log("\n============\n");
//some os números de 1 a 10 com while
let cont = 1;
let soma = 0;
while (cont >= 1 && cont <= 10) {
  console.log(`${cont} + ${soma} = ${cont + soma}`);
  soma = cont + soma;
  cont++;
}

console.log("\n============\n");
//gere um número (de 1 a 5) para o usuário adivinhar até acertar
prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let adivinhacao;

do {
  adivinhacao = Number(prompt("Escolha um número de 1 a 5: "));
} while (adivinhacao !== numeroAleatorio);
console.log(`Você acertou!! O número secreto era ${numeroAleatorio}`);
