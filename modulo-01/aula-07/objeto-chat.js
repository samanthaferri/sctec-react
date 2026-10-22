/* 
OBJETOS: Um objeto é uma estrutura de dados que permite armazenar informações relacionadas em uma única variável, organizadas em pares de chave e valor.
Diferentemente dos arrays, que utilizam índices numéricos, os objetos utilizam propriedades (chaves) para identificar seus valores.
*/

// CRIAR UM OBJETO
const objeto = {
  chave: "valor da chave",
  chave2: "valor da chave2",
};

const produto = {
  nome: "Camiseta: avril lavigne",
  preco: 49.9,
  qtEstoque: 10,
  disponivel: true,
};

/* 
Informações importantes:
- nome, preco, qtdEstoque e disponivel são as chaves (propriedades).
- "Camiseta: avril lavigne", 49.90, 10 e true são os valores.
- Cada propriedade é separada por vírgula.
- Os valores podem ser strings, números, booleanos, arrays, outros objetos e até funções.
- Mesmo declarado com const, podemos modificar as propriedades do objeto.
*/

//Acessar propriedades -> pode ser acessado de duas maneiras
console.log(`Nome do produto: ${produto.nome}`);
console.log(`Preço do produto: ${produto["preco"]}`);

const propriedade = "disponivel";
console.log(`Disponível? ${produto[propriedade]}`);
console.log("\n========\n");

//Adicionar propriedade
produto.categoria = "roupa";
produto["qtEstoque"] = 8;
console.log(produto);
console.log("\n========\n");

//Alterar propriedade
produto.preco = 62;
produto["disponivel"] = false;
console.log(produto);
console.log("\n========\n");

//Remover propriedades: delete
delete produto.categoria; //também pode usar colchetes: delete produto["nome"]
console.log(produto);
console.log("\n========\n");

// Object.keys() — Listar as chaves -> Retorna um array contendo os nomes das propriedades do objeto.
console.log(`Chaves do produto (object keys):`);
console.log(Object.keys(produto));
console.log("\n========\n");

// Object.values() — Listar os valores -> Retorna um array contendo os valores das propriedades do objeto.
console.log(`Valores do produto (object.values):`);
console.log(Object.values(produto));
console.log("\n========\n");

//Object.entries() — Listar chaves e valores -> Retorna um array com pares de chave e valor.
console.log(`Valores do produto (object.values)`);
console.log(Object.entries(produto));
console.log("\n========\n");

// Verificar se uma propriedade existe
// O método Object.hasOwn() verifica se o objeto possui determinada propriedade, retornando true ou false.
console.log(
  `Verificar se propriedade nome existe (object.hasown):`,
);
console.log(Object.hasOwn(produto));

/* Resumo dos principais comandos
Operação	                      Sintaxe
Criar objeto	                  const produto = { nome: "Camiseta" }
Acessar                         propriedade	produto.nome
Acessar com colchetes	          produto["nome"]
Adicionar propriedade	          produto.categoria = "Roupa"
Alterar propriedade	            produto.preco = 59.90
Remover propriedade	            delete produto.nome
Listar chaves	                  Object.keys(produto)
Listar valores	                Object.values(produto)
Listar pares chave/valor	      Object.entries(produto)
Verificar propriedade	          Object.hasOwn(produto, "nome") 
*/
