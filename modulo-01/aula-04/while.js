/* 
o while é uma estrutura de repetição que executa um bloco decódigo ENQUANTO uma condição continuar sendo verdadeira.
Diferente do for for, você precisa saber quantas vezes ele vai repetir, e ele só para quando a condição se tornar falsa.
Ideal quando a repetição depende de algo que pode mudar a cada rodada, como uma resposta do usuário que vai acumulando.

CASO DE USO
- Repetir uma pergunta até o usuário digitar uma resposta válida
- Somar valores até atingir um limite
- Processar dados enquanto ouver itens disponíveis
*/

//mostrar o contador enquanto é menor ou igual a 5
let cont = 0;
while (cont <= 5) {
  console.log(cont);
  cont++; // sem esse const++ ele entra em um looping infinito
}

//verificar se a idade é um número
const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite a sua idade: "));
while (Number.isNaN(idade)) {
  idade = Number(prompt("Digite a sua idade: "));
}
console.log(idade);
