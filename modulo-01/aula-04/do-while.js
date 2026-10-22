/* 
o do...while é muito parecido com o while, mas com a diferença de que o bloco de código é executado pelo menos uma vez, mesmo que a condição seja falsa desde o início => a verificação da condição só é feita depois da primeira execução.
É ideal quando você precisa que algo aconteça antes de decidir se deve repetir;

Ou seja, o bloco de código é executado ao menos 1x

CASOS DE USO
- Exibir um menu e esperar a escolha do usuário
- Pedir um dado e só depois validar se está certo
- Garantir que uma ação rode ao menos uma vez antes de verificar a condição 
*/

const prompt = require("prompt-sync")();

//menu -> opção 0 sai do menu -> precisamos mostrar o menu antes de decidir
let opcao;
do {
  console.log("1 - Cadastrar");
  console.log("2 - Listar");
  console.log("0 - Sair");
  opcao = Number(prompt("Escolha uma opção: "));
} while (opcao !== 0);
console.log("Programa encerrado");

/* 
QUAL LAÇO USAR
-> FOR: quando sei QUANTAS vezes (contar, tabuada, percorrer uma lista)
-> WHILE: repito até algo acontecer (senha, palpite)
-> DO-WHILE: como o while, mas roda apenas uma vez

Todos se repetem; muda o "quando eu testo a condição" 
*/

let n = 10;
do {
  console.log(n);
} while (n < 10);

let idade;

do {
  idade = prompt("Digite sua idade (apenas números): ");
  idade = Number(idade);
} while (Number.isNaN(idade));

console.log(idade);
