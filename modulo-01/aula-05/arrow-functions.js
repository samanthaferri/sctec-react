/* 
ARROW FUNCTIONS
São uma forma mais curta e moderna de escrever funções em javascript.
Em vez de usar a palavra function, você usa uma seta => entre os parâmetros e o corpo da função.
Quando a função tem apenas uma linha de retorno, pode mitir as chaves e o return, deixando o código bem mais enxuto

CASOS DE USO
- Substituir funções tradicionais por uma sintaxe mais limpa
- Callbacks em métodos de array como map, filter e forEach
- Funções curtas que cabem em uma única linha
- Armazenar funções em variáveis de forma compacta
*/

//Função soma
function soma(a, b) {
  return a + b;
}

//Arow Function
const soma2 = (a, b) => a + b;

let resultado1 = soma(10, 1);
let resultado2 = soma(10, 1);
console.log(`Soma: ${resultado1} -> Soma2: ${resultado2}`);

//-----------------

//Função saudação
function saudacao() {
  return "Olá, pessoa";
}

//Arrow Function
const saudacao2 = () => "Olá, pessoa";

let cumprimento = saudacao();
let cumprimento2 = saudacao2();
console.log(`Saudacao: ${cumprimento} -> Saudacao2: ${cumprimento2}`);

//-----------------

//Funcao da aula anterior vs arrow function
function precoFinal(preco, desconto) {
  return preco - (preco * desconto) / 100;
}

//Arrow Function
const precoFinal2 = (preco, desconto) => preco - (preco * desconto) / 100;

let valorProduto = (100, 20);
let valorProduto2 = (100, 20);
console.log(`Preco: R$${valorProduto} -> Preco2: R$${valorProduto2}`);

//-----------------

//Funcao que devolve a media de nota 1 e nota 2
function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

//Arrow function
const media2 = (nota1, nota2) => (nota1 + nota2) / 2;

let calculoMedia = media(6, 10);
let calculoMedia2 = media(6, 10);
console.log(`Media: ${calculoMedia} -> Media2: ${calculoMedia2}`);
