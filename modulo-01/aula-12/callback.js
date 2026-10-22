/* 
CALLBACK: função que recebe função
a função passada como argumento, chamada "de volta" lá dentro
é oq já faziamos na semana 04, usando um map por exemplo

map, filter, forEach RECEBEM uma função -> isso é callback

CLOSURE x CALLBACK
Closure: a função LEMBRA de uma variável de fora (memória)
Callbacl: a função é PASSADA para uma outra rodar depois (entrega)
*/

const numeros = [
  1,
  2,
  3,
  4,
];

const dobrados = numeros.map((n) => n * 2);
console.log(`Map do array números (dobro): ${dobrados}`);

function executa(a, b, operacao) {
  return operacao(a, b);
}

const soma = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;

console.log(`Usando a função executa soma de 2 + 3: ${executa(2, 3, soma)}`);
console.log(`Usando a função executa multiplicação de 2 * 3: ${executa(2, 3, multiplicacao)}`);

//padrão: faça algo ao terminar
function finalizaAnalise(nome, onDone) {
  console.log("Análise concluída!");
  onDone(nome);
}

finalizaAnalise("Ana", (nome) => {
  console.log(`${nome}, revise suas pendências`);
});
