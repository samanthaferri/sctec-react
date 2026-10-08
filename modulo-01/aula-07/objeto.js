//Cadastrar um produto
const produto = {
    nome: "Camiseta de Banda",
    preco: 49.90,
    qdEstoque: 10,
    disponivel: true
}

console.log(produto);
console.log(produto.nome);

//adicionar atributos
produto.categoria = "Roupa";
produto["descricao"] = "Camiseta com logo da Avril Lavigne";

console.log(produto);

//deletar atributos
delete produto.descricao;
console.log(produto);


//ver atributos do objeto
console.log(Object.keys(produto));

//ver valores dos atributos do objeto
console.log(Object.values(produto));