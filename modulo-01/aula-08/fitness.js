//do while -> exibir o menu da aplicação contendo as opções: registrar atividade, ver historico e sair
// funcionalidade: exibir os exercicios disponiveis e perguntar qual exercicio deseja regstrar
// solicitar: distancia realizada, tempo gasto em minutos, adicionar a atividade no array de exercicios

const prompt = require('prompt-sync')();

console.log(`Operações disponíveis: `);
console.log(`1: Registrar atividade `);
console.log(`2: Ver histórico`);
console.log(`0: Sair`);

let operacao = Number(prompt(`Digite a opção: `));

switch(operacao) {
    case 1:
        //chamar registro
        console.log(`Registrando atividade`);
        break;
    case 2: 
        //ver historico
        break;
    case 0: 
        console.log("Saindo...")
        break;
    default: 
        console.log(`Digite uma opção válida.`)
}