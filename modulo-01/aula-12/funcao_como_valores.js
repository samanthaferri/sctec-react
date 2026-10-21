/* 
FUNÇÃO COMO ARGUMENTO
da para PASSAR uma função para outra função
*/

//colocando a função em uma variável
const dobro = function (n) {
  return n * 2;
};
console.log(`Dobro: ${dobro(2)}`);

//arrow function (colocando a função na variável tb)
const triplo = (n) => n * 3;
console.log(`Triplo: ${triplo(2)}`);

//função aplicar para usar alguma operação
function aplicar(valor, operacao) {
  return operacao(valor);
}

console.log(`Aplicando dobro: ${aplicar(2, dobro)}`);
console.log(`Aplicando triplo: ${aplicar(2, triplo)}`);
console.log("\n..................................\n");

//função dentro de uma função
function somador() {
  return function (n) {
    return n + 1;
  };
}
somarUm = somador();
console.log(`Function dentro de function -> Somador(2): ${somador(2)}`);
console.log(`somarUm = somador() -> somarUm(2): ${somarUm(2)}`);
