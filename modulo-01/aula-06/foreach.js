/* 
FOR EACH: Percorrer os elementos de um array
O forEach() é um método que executa uma função para cada elemento do array, automaticamente, sem precisar controlar um contador manualmente.
É bastante utilizado para percorrer listas e executar alguma ação com cada elemento.

SINTAXE
array.forEach((elemento, indice) => {
  // Código executado para cada elemento
});

- elemento: representa o valor atual do array.
- indice: representa a posição do elemento (opcional).

A função é executada uma vez para cada elemento existente.

Informações importantes
- O forEach() percorre os elementos em ordem.
- Não precisa de contador como o for tradicional.
- Não cria um novo array e sempre retorna undefined.
- Não é possível interromper normalmente sua execução utilizando break.
- É indicado quando queremos executar alguma ação para cada elemento, como exibir informações.

DIFERENÇA PARA O FOR: o for exige que você controle a inicialização, a condição e o incremento do contador. 
O forEach() faz a iteração automaticamente, permitindo trabalhar diretamente com os elementos.
 */

const frutas = ["Amora", "Mirtilo", "Uva", "Limão", "Ameixa"];
console.log(`Frutas: ${frutas.join(", ")}\n`);

frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});

console.log("\n========\n");

const notas = [8, 7, 8.5, 10];
console.log(`Notas: ${notas.join(", ")}\n`);

notas.forEach((nota, indice) => {
  console.log(`${indice}: ${nota}`);
});
