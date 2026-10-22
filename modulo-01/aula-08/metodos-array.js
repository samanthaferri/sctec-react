/* 
ARRAYS DE OBJETOS
O cenário comum é receber uma lista de coisas que tem várias informações
A grande vantage, é que todos os métodos de array funcionam com array de objetos

CASOS DE USO
- Lista de produtos de uma loja virtual com nome, preço e estoque
- Cadastro de alunos com nome e notas para calcular aprovação
- Registro de vendas do mês para gerar relatórios com totais e médias

FIND: percorre o array e retorna o primeiro item que satisfaz a condição.
Se nenhum item fot encontrado, retorna undefined
É ideal quanfo você sabe que precisa apenas um resultado, como buscar um aluno pelo número de matrícula

FILTER: filtrar elementos por condição
Ele percorre o array e retorna um novo array apenas com os itens que passaram na condiçao (retornam true)

EVERY: verifica se todos satisfazem a confição
Retorna true se todos passarem, ou false se pelo menos um passar

MAP: transformar cada elemento 
percorre o array e aplica uma transformação em cada item, retornando um novo array com os resultados.
O array original não muda! o novo array sempre terá a mesma quantudade de itens que o original, mas cada item passou por uma modificação
É ideal quando você precisa converter, formatar ou calcular algo para todos os elementos de uma lista
EX: aplicar desconto em todos os preços de uma lista, extrair apenas os nomes de uma lista de objetos, converter valores de uma moeda para outra

REDUCE: acumular valores em um resultado
percorre o array e acumula todos os valores em um único resultado.
ele recebe dois parâmetros na função: o acumulador (que guarda o resultado parcial) e o item atual
ideal quando você precisa transformar um array inteiro em um único valor(como soma, media, contagem)
EX: somar todos os preços de um carrinho de compras, calcular a média de notas de uma turma, contar quantas vezes o valor aparece em uma lista
*/

const alunos = [
  {
    nome: "Samantha",
    sobrenome: "Ferri",
    matricula: "01234",
  },
  {
    nome: "Henrique",
    sobrenome: "Schmidt",
    matricula: "01235",
  },
  {
    nome: "Manuela",
    sobrenome: "Fonseca",
    matricula: "01236",
  },
];

console.log(alunos);
console.log("\n===============\n");

//-----

//FIND: Array de frutas
const frutas = ["Maçã", "Banana", "Limão"];
const banana = frutas.find((fruta) => {
  return fruta === "Banana";
});

if (banana) {
  console.log(banana); //vai retornar Banana caso positivo no find
}

const limao = frutas.find((fruta) => fruta === "Limão"); //mesma função da de cima
if (limao) {
  console.log(limao);
}

console.log("\n===============\n");

//-------

//FIND com objetos
const matricula = alunos.find(
  (aluno) => aluno.matricula === "01234",
);
if (matricula) {
  console.log(matricula); //retorna o objeto da aluna samantha
}

console.log("\n===============\n");

//FILTER com objetos
const numeros = [1, 2, 3, 4, 7, 12];
const pares = numeros.filter((numero) => numero % 2 === 0);
if (pares) {
  console.log(pares); //retorna os numeros pares apenas
}

console.log("\n===============\n");

//EVERY com objetos
const notas = [8, 9, 10, 7];
const todosAprovados = notas.every((nota) => nota >= 7);
if (todosAprovados) {
  console.log(todosAprovados); //true pq todos tem media acima de 7
}

console.log("\n===============\n");

//MAP com objetos
const precos = [100, 200, 50, 80];
const precosComDesconto = precos.map(
  (preco) => preco * 0.9,
); //aplicar 10% de desconto
console.log(`Preços originais: ${precos}`);
console.log(`Preços com desconto: ${precosComDesconto}`);

console.log("\n===============\n");

//---------

const produtos = [
  {
    nome: "body splash virginia",
    preco: 25,
    qdEstoque: 10,
    disponivel: true,
  },
  {
    nome: "body splash natura",
    preco: 80.59,
    qdEstoque: 2,
    disponivel: true,
  },
  {
    nome: "creme boticário",
    preco: 75.8,
    qdEstoque: 7,
    disponivel: true,
  },
];

const todosDisponiveis = produtos.every(
  (produto) => produto.disponivel === true,
);
console.log(
  `Todos os produtos estao disponíveis? ${todosDisponiveis}`,
); //true pq todos estao c true no disponivel

//const precosDesconto = produtos.map((produto) => (produto.preco *= 0.9).toFixed(2)); //se eu quiser retornar os preços com desconto
//console.log(`Produtos com desconto: ${precosDesconto}`);

console.log("\n===============\n");

console.log("Produtos:");
console.log(produtos);

console.log("\n===============\n");

console.log("Produtos com descontos de 20% aplicados:");
const produtosComDesconto = produtos.map((produto) => {
  const novoPreco = (produto.preco *= 0.8);
  produto.preco = novoPreco; //atribui o novo valor no preco
  return produto; //retornar o array de produtos com o preco alterado
});

console.log(produtos);

console.log("\n===============\n");

//REDUCE
/* const sintaxeReduce = Array.reduce((acumulador, item) => {
  return; //operação de acúmulo
}, valorInicial); */

const notas2 = [8, 7, 9, 6, 10];
const soma = notas2.reduce((acumulador, nota) => {
  return acumulador + nota;
}, 0);
const media = soma / notas2.length;
console.log(`Média usando reduce: ${media}`);

console.log("\n===============\n");

//reduce dos produtos
console.log(`Array dos produtos:`);
console.log(produtos);

const mediaProdutos = produtos.reduce((acc, produto) => {
  return acc + produto.preco;
}, 0);
console.log(
  `Soma dos valores dos produtos: R$${mediaProdutos.toFixed(2)}`,
);

const valorTotalProduto = produtos.reduce(
  (acc, produto) => {
    return acc + produto.preco * produto.qdEstoque;
  },
  0,
);
console.log(
  `Valor total do estoque de produtos: R$${valorTotalProduto.toFixed(2)}`,
);
