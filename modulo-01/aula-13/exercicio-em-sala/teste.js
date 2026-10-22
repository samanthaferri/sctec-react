const despensa = require("./despensa");
const receitas = require("./bd_receitas");
const Receita = require("./receita");

function buscaDespensa() {
  return new Promise((resolve, reject) => {
    console.log("Buscando itens disponíveis na despensa...");
    //simula fetch dos dados na api de despensa;
    setTimeout(() => {
      if (despensa !== null && despensa.length > 0) {
        resolve(despensa);
      } else {
        reject("Não foi possível carregar os itens da despensa!");
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
        reject("Não foi possível carregar as receitas!");
      }
    }, 3000);
  });
}

async function main() {
  const receitasResponse = await buscaReceitas();
  const listaReceitas = receitasResponse.map(
    (receitaObj) =>
      new Receita(receitaObj.nome, receitaObj.ingredientes, receitaObj.minutos),
  );

  console.log(listaReceitas);
}

main();
