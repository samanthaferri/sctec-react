/* 
CLOSURE
é uma função interna que LEMBRA das variáveis da função externa
mesmo depois que a externa já terminou de rodar

"A função carrega uma mochilinha com o ambiente onde nasceu"

POR QUÊ CLOSURE IMPORTA?
Guarda um estado PRIVADO, sem variável global solta
cada "fábrica" chamada gera uma memória solta
no React isso volta o tempo todo
*/

//calculo de impostos
function criaCalcularImposto(taxa) {
  return function (valor) {
    return valor + (valor * taxa) / 100;
  };
}

const calculaTaxaImportacao = criaCalcularImposto(10); // a taxa de importação é 10%
console.log(`Calcular taxa de importação (10%) de um produto de R$50: ${calculaTaxaImportacao(50)}`);
console.log(`Calcular taxa de importação (10%) de um produto de R$100: ${calculaTaxaImportacao(100)}`);

const calculaTaxaLuxo = criaCalcularImposto(50); //calcular algo que a taxa é 50%
console.log(`Calcular taxa de luxo (50%) de um produto de R$50: ${calculaTaxaLuxo(50)}`);
console.log(`Calcular taxa de luxo (50%) de um produto de R$100: ${calculaTaxaLuxo(100)}`);

console.log("\n..................................\n");

function criaContador() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

const click = criaContador();
console.log(`Função de contador (executando 1x): ${click()}`);
console.log(`Função de contador (executando 2x): ${click()}`);
console.log(`Função de contador (executando 3x): ${click()}`);

const contador2 = criaContador();
console.log(`Contador 2 (1x): ${contador2()}`);
console.log(`Função de contador (executando mais uma vez): ${click()}`);
console.log(`Contador 2 (2x): ${contador2()}`);
console.log("\n..................................\n");
