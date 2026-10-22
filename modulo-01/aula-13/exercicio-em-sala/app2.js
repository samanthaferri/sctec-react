/* Vamos desenvolver juntos um sistema que compara receitas com um registro dos itens
disponíveis.
Requisitos funcionais:
● Classe receita: nome, lista de ingredientes e tempo de preparo em minutos.
● Programa deve buscar lista de produtos disponíveis na despensa do usuário.
● Programa deve buscar lista de receitas já cadastradas.
● Programa deve comparar cada receita com os produtos disponíveis e informar quais
ingredientes o usuário possui e quais estão faltando.
● Receita deve ter método para exibir: nome, qtd de ingredientes e tempo de preparo

Requisito não funcional:
● utilizar Promises, async/await e setTimeout para simular request.

Bônus:
● Classe receita de sobremesa, contendo atributos: nome, lista de ingredientes, tempo de
preparo em minutos e tempo de descanso.
● Além de todo o funcionamento que já existe, a nova classe deve ter um método que exibe
o tempo total de preparo (tempo de preparo + descanso). */

const despensa = require("./despensa");
const Receita = require("./receita");
const ReceitaSobremesa = require("./receita_sobremesa");
const receitas = require("./bd_receitas");
const receitaSobremesa = require("./bd_receitas_sobremesa");

function buscaDespensa() {
  return new Promise((resolve, reject) => {
    console.log("Buscando itens disponíveis na despensa...");

    //simular fetch de dados na API da despensa
    setTimeout(() => {
      if (despensa !== null && despensa.length > 0) {
        resolve(despensa);
      } else {
        reject("Não foi possível carregar os itens da despensa");
      }
    }, 2000);
  });
}

function buscaReceitas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (receitas !== null && receitas.length > 0) {
        resolve(receitas);
      } else {
        reject("Não foi possível carregar as receitas");
      }
    }, 1000);
  });
}

function buscaReceitasSobremesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (receitas !== null && receitas.length > 0) {
        resolve(receitas);
      } else {
        reject("Não foi possível carregar as receitas");
      }
    }, 1000);
  });
}

async function main() {
  const receitasResponse = await buscaReceitas();
  const listaReceitas = receitasResponse.map((receitaObj) => new Receita(receitaObj.nome, receitaObj.ingredientes, receitaObj.minutos));

  //const receitasSobremesaResponse = await

  const itensDisponiveisDespensa = await buscaDespensa();

  listaReceitas.forEach((receita) => {
    receita.exibirDetalhes();
    receita.compararIngredientes(itensDisponiveisDespensa);
  });
}

main();
