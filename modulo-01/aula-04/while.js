let cont = 0;

while (cont <= 5) {
    console.log(cont);
    cont++;
}

const prompt = require('prompt-sync')();
let idade = prompt("Digite sua idade: ");
idade = Number(idade);
while (Number.isNaN(idade)) {
    idade = prompt("Digite sua idade (utilize apenas números): ");
    idade = Number(idade);
}