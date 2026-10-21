/* 
Síncrono: uma linha só roda quando a anterior terminou

E se a tarefa DEMORA (baixar dados, esperar algo)?

Travar o programa esperando, em muitos casos, é péssimo. Aí entra o ASSÍNCRONO!

setTimeout(funcao, ms): agenda uma função pro futuro
Repare: passamos a função SEM os parênteses

o JS roda TODAS as linhas "normais" primeiro, sem parar
O que foi agendado espera em uma fila
Só quando o código normal acaba é que a fila é chamada
Por isso o setTimeout, mesmo com 0ms, nunca "fura" a fila
*/

//simular uma execução assíncrona
setTimeout(() => {
  console.log(`rodou depois de 1s`);
}, 1000);

console.log("\n..................................\n");

console.log("1. Pedindo os dados ao servidor.");
setTimeout(() => {
  console.log("3. Os dados chegaram!");
}, 2000);
console.log("2. Enquanto isso, o programa continua...");

console.log("\n..................................\n");

function carregaPedidos(callback) {
  setTimeout(() => {
    console.log("Pedidos carregados!");
    callback(); // o callback só é chamado QUANDO o dado fica pronto, não na hora -> é assim que "avisa" que acabou
  }, 1000);
}
