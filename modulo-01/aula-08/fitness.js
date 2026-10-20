/* 
APP FITNESS
do while -> exibir o menu da aplicação contendo as opções: registrar atividade, ver historico e sair

funcionalidade: 
- exibir os exercicios disponiveis -> function start
- perguntar qual exercicio deseja registrar -> function registraAtividade
solicitar: 
- distancia realizada
- tempo gasto em minutos
- adicionar a atividade no array de exercicios

visualizar histórico: 
- verificar se existem atividades registradas -> function visualizaHistorico
- caso o array esteja vazio
- exibir uma mensagem informando que não há atividades e encerrar a função 
- exibir um cabeçalho indicando o início do histórico
- percorrer o array de atividades (forEach, for ou while)
- mostrar cada atividade numerada, contendo exercício, distância e tempo gasto
*/

const prompt = require("prompt-sync")();

const atividades = [];
const exerciciosDisponiveis = [
  "Corrida",
  "Caminhada",
  "Ciclismo",
  "Musculação",
  "Futebol",
  "Vôlei",
  "Basquete",
];

//-----

let operacao;
//Iniciar sistema: opções de menu
function start() {
  do {
    console.log(`\n--------- Operações disponíveis ---------\n`);
    console.log(`1: Registrar atividade `);
    console.log(`2: Ver histórico`);
    console.log(`0: Sair\n`);

    operacao = Number(prompt(`Digite a opção desejada: `));

    switch (operacao) {
      case 1:
        console.log(`\nRegistrando atividade...\n`);
        registraAtividade();
        break;
      case 2:
        console.log("\nVisualizando histórico...\n");
        visualizaHistorico();
        break;
      case 0:
        console.log("\nSaindo...\n");
        break;
      default:
        console.log(`\n❌ Opção inválida!`);
        break;
    }
  } while (operacao !== 0);

  console.log("Saiu");
}

//----------

function registraAtividade() {
  //primeiro mostra a lista de exercícios, e o for vai percorrer essa lista
  console.log("Exercícios disponíveis para registro:");
  for (i = 0; i < exerciciosDisponiveis.length; i++) {
    console.log(`${i + 1} - ${exerciciosDisponiveis[i]}`);
  }

  //o segundo passo é o usuário selecionar um exercício da lista de exercícios
  const opcaoSelecionado = Number(prompt("Digite uma opção de exercícios: "));
  const exercicioSelecionado = exerciciosDisponiveis[opcaoSelecionado - 1];

  //para o exercício selecionado, ele informa o tempo da atividade e a distância percorrida nesse exercício (opcional)
  const tempoAtividade = Number(prompt("Quantos minutos durou essa atividade? "));
  const distanciaAtividade = Number(prompt("Qual a distância em metros (opcional)?  "));

  //salvar o objeto atividade registrado acima no histórico
  const atividade = {
    exercicio: exercicioSelecionado,
    distanciaPercorrida: distanciaAtividade,
    tempo: tempoAtividade,
  };

  atividades.push(atividade);
}

//----------

function visualizaHistorico() {
  if (atividades.length < 1) {
    console.log("\n❌ Não há atividades registradas.");
    return;
  }

  console.log("\n*** Histórico de atividades ***\n");
  atividades.forEach((atividade, i) => {
    console.log(`${i + 1} - ${atividade.exercicio} | Tempo: ${atividade.tempo}min | Distância: ${atividade.distanciaPercorrida}m`);
  });
}

//----------

start();
