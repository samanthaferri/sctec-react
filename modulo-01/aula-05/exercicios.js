/* Criar um programa que calcula o preço final de um produto com desconto
- criar variáveis para preço original e percentual de desconto
- criar uma função para calcular o desconto que retorna o valor final do produto
- usar if-else para aplicar o desconto apenas para compras acima de 100 reais */

const prompt = require('prompt-sync')();

function precoFinal(preco, desconto) {
    return Number(preco) - Number(preco * desconto / 100);
}

let precoOriginal = Number(prompt("Qual é o valor do produto (ex.: 100)? R$"));
while (Number.isNaN(precoOriginal)){
    precoOriginal = Number(prompt("Valor inválido! Insira novamente o valor do produto: R$:"))
}

let descontoOferecido;
if(precoOriginal > 100) {
    descontoOferecido = Number(prompt("Qual é a porcentagem do desconto (ex.: 10)? "));
    console.log(`O valor original do produto é R$${precoOriginal} e o desconto é de ${descontoOferecido}%`);
    console.log(`Então, o preço final é de: R$${precoFinal(precoOriginal, descontoOferecido).toFixed(2)}`)
}


