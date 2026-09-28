/* //conte de 5 até 1 e escreva Já
for (i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Já!");

//some os números de 1 a 10 com while
let cont = 1;
let soma = 0;
while (cont <= 10) {
    console.log(cont + " + " + soma + " = " + (soma + cont));
    soma = soma + cont;
    cont++;
}
 */
//gere um número (de 1 a 5) para o usuário adivinhar até acertar
const prompt = require('prompt-sync')();
let numeroAleatorio = Math.floor(Math.random() * 5) + 1;

do {
    adivinhacao = Number(prompt("Escolha um número de 1 a 5 (usando somente números): "));

    if (Number.isNaN(adivinhacao)) {
        console.log("sam");
    }
    if (adivinhacao === numeroAleatorio) {
        console.log("Você acertou!");
    } else {
        console.log("Você errou, tente novamente.");
    }
} while (adivinhacao !== numeroAleatorio);