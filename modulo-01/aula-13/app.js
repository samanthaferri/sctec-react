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

const despensa = require("./despensa"); //itens disponíveis na despensa
const Receita = require("./Receita");
const receitas = require("./bd_receitas"); //banco de dados das receitas cadastradas
const ReceitaSobremesa = require("./ReceitaSobremesa");
const receitasSobremesa = require("./bd_receitas_sobremesa"); //banco de dados das receitas de sobremesa

//função para buscar receitas com o async, como se estivesse buscando de uma API
function buscaDespensa() {
  return new Promise((resolve, reject) => {
    console.log("\nBuscando itens na despensa...\n");
    setTimeout(() => {
      if (despensa != null && despensa.length > 0) {
        resolve(despensa);
      } else {
        reject("Não foi possível carregar os itens da despensa.");
      }
    }, 1000);
  });
}

//função para buscar receitas (async -> simulando fetch com o bd)
function buscaReceitas() {
  return new Promise((resolve, reject) => {
    console.log("\nBuscando receitas cadastradas...\n");
    setTimeout(() => {
      if (receitas != null && receitas.length > 0) {
        resolve(receitas);
      } else {
        reject("Não foi possível carregar as receitas.");
      }
    }, 1000);
  });
}

//função para buscar receitas de sobremesa
function buscaReceitasSobremesa() {
  return new Promise((resolve, reject) => {
    console.log("\nBuscando receitas de sobremesa cadastradas...\n");
    setTimeout(() => {
      if (receitasSobremesa != null && receitasSobremesa.length > 0) {
        resolve(receitasSobremesa);
      } else {
        reject("Não foi possível carregar as receitas de sobremesa.");
      }
    }, 1000);
  });
}

async function main() {
  try {
    const receitasResponse = await buscaReceitas(); //busca array de objetos: receitas cadastradas no bd
    const listaReceitas = receitasResponse.map(
      (receitaObj) =>
        new Receita(
          receitaObj.nome,
          receitaObj.ingredientes,
          receitaObj.minutos,
        ),
    ); //objeto do tipo receita

    const receitaSobremesaResponse = await buscaReceitasSobremesa();
    const listaReceitasSobremesa = receitaSobremesaResponse.map(
      (receitaSobremesaObj) =>
        new ReceitaSobremesa(
          receitaSobremesaObj.name,
          receitaSobremesaObj.ingredients,
          receitaSobremesaObj.minutes,
          receitaSobremesaObj.chillTime,
        ),
    );

    const itensDisponiveisDespensa = await buscaDespensa();

    listaReceitas.forEach((receita) => {
      receita.exibeDetalhes();
      receita.compararIngredientes(itensDisponiveisDespensa);
    });

    listaReceitasSobremesa.forEach((receitaSobremesa) => {
      receitaSobremesa.exibeDetalhes();
      receitaSobremesa.compararIngredientes(itensDisponiveisDespensa);
    });
  } catch (e) {
    console.log(
      "Não foi possível carregar os dados de receita e/ou despensa. \nErro: " +
        e,
    );
  }
}

main();
