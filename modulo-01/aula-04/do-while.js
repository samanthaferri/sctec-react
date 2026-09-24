//do-while: o bloco de código é executado pelo menos uma vez

let n = 10;
do {
    console.log(n);
} while (n<10);

const prompt = require('prompt-sync')();
let idade;

do {
    idade = prompt("Digite sua idade (apenas números): ");
    idade = Number(idade);
} while(Number.isNaN(idade));

console.log(idade);