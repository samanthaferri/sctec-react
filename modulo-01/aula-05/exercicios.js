/* Criar um programa que calcula o preço final de um produto com desconto
- criar variáveis para preço original e percentual de desconto
- criar uma função para calcular o desconto que retorna o valor final do produto
- usar if-else para aplicar o desconto apenas para compras acima de 100 reais */

const prompt = require("prompt-sync")();

function calcularDesconto(precoOriginal, desconto) {
  let precoFinal;
  if (precoOriginal >= 100) {
    precoFinal = precoOriginal - (precoOriginal * desconto) / 100;
  } else {
    precoFinal = precoOriginal;
  }

  console.log("==============");
  console.log(`\nValor do produto: R$${precoOriginal}`);
  console.log(`Desconto: ${desconto}% (R$${(precoOriginal * desconto) / 100})`);
  console.log(`Valor final do produto: R$${precoFinal}\n`);
  console.log("==============");

  return precoFinal;
}

let precoOriginal = Number(prompt("Informe o valor do produto: R$"));

//validar preço do produto
while (Number.isNaN(precoOriginal) || precoOriginal < 0) {
  if (Number.isNaN(precoOriginal)) {
    precoOriginal = Number(prompt("Oops, o valor digitado não é válido. Tente novamente: R$"));
  } else {
    precoOriginal = Number(prompt("O valor do produto deve ser um número positivo. Tente novamente: R$"));
  }
}
//validar desconto
let desconto = Number(prompt("Informe o valor do desconto em porcentagem (0 a 100): "));
while (Number.isNaN(desconto) || desconto < 0 || desconto > 100) {
  if (Number.isNaN(desconto)) {
    desconto = Number(prompt("Oops, o valor digitado não é válido. Insira um valor de 0 a 100: "));
  } else if (desconto < 0) {
    desconto = Number(prompt("Oops, o desconto não pode ser negativo. Tente novamente: "));
  } else {
    desconto = Number(prompt("Oops, o desconto não pode ser maior que 100. Tente novamente: "));
  }
}

calcularDesconto(precoOriginal, desconto);
