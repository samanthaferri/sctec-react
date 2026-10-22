/* 
ARRAY: é uma estrutura de dados que permite armazenar vários valores em uma única variável, organizados por índices (posições).

Importante:
- Os índices começam em 0, não em 1.
- Um array pode armazenar números, strings, booleanos e até outros arrays.
- length informa a quantidade de elementos.
- Mesmo declarado com const, é possível adicionar, remover ou alterar elementos. O que não pode é atribuir um novo array à variável.
*/

//------------------------

//OPERAÇÕES BÁSICAS

//Armazenar
const frutas = [
  "Maçã",
  "Banana",
  "Uva",
  "Amora",
];
const notas = [
  7,
  8,
  10,
];
const numeros = [
  1,
  2,
  3,
  4,
  5,
];
const vazio = [];

//Acessar um elemento: colocamos o índice entre []
console.log(frutas[0]);
console.log(frutas[1]);

//Posição e quantidade: o índice é a posição do elemento e o length o tamanho
console.log("====================");
console.log(`Tamanho do array frutas: ${frutas.length}`);
console.log(`Posição da fruta Uva: ${frutas.indexOf("Uva")}`);

//Acessar último elemento
console.log("====================");

console.log(frutas[frutas.length - 1]);

//Trocar um valor
console.log("====================");

frutas[0] = "Jabuticaba";
console.log(frutas);

//Adicionar um elemento ao final
console.log("====================");

frutas[frutas.length] = "Laranja";
console.log(frutas);

//------------------------

//MÉTODOS DE ARRAY

//01: Adicionar e remover elementos

//PUSH: Adiciona ao final
console.log("====================");
console.log(`Frutas: ${frutas}`);

frutas.push("Mirtilo");
console.log(`Pop mirtilo: ${frutas}`);

//POP: Remove do final
console.log("====================");
console.log(`Frutas: ${frutas}`);

frutas.pop();
console.log(`pop() removeu o último elemento: ${frutas}`);

//SHIFT: Remove do início
console.log("====================");
console.log(`Frutas: ${frutas}`);

frutas.shift();
console.log(`shift() removeu o primeiro elemento: ${frutas}`);

//UNSHIFT: Adiciona no início
console.log("====================");
console.log(`Frutas: ${frutas}`);

frutas.unshift("Manga");
console.log(`unshift() adicionou no começo: ${frutas}`);

//---

//02: Buscar e acessar elementos

//INCLUDES: Verifica se existe -> true or false
console.log("====================");
console.log(`Frutas: ${frutas}`);

console.log(
  `includes() verificando se existe Banana: ${frutas.includes("Banana")}`,
);
console.log(
  `includes() verificando se existe Pêra: ${frutas.includes("Pêra")}`,
);

//INDEX OF: Encontra a posição
console.log("====================");
console.log(`Frutas: ${frutas}`);

console.log(
  `indexOf() verificando a posição de Amora: ${frutas.indexOf("Amora")}`,
);

//AT: Acessa pela posição
console.log("====================");
console.log(`Frutas: ${frutas}`);

console.log(`at() acessando a posição 1: ${frutas.at(1)}`);
console.log(`at() acessando a posição -1: ${frutas.at(-1)}`);
console.log(`at() acessando a posição -2: ${frutas.at(-2)}`);

//---

//03: Organizar e modificar elementos

//SORT: Ordena elementos
console.log("====================");
console.log(`Frutas: ${frutas}`);

frutas.sort();
console.log(`sort() ordenou os elementos: ${frutas}`);

console.log(`Notas: ${notas}`);
console.log(
  `sort() sem parâmetros não ordena numericamente como esperaríamos: ${notas}`,
);

//REVERSE: Inverte a ordem
console.log("====================");
console.log(`Frutas: ${frutas}`);

frutas.reverse();
console.log(`reverse() inverteu a ordem: ${frutas}`);

//FILL: Preenche ou substitui valores
console.log("====================");
console.log(`Números: ${numeros}`);

numeros.fill(0);
console.log(`fill(0) substituiu os elementos por 0: ${numeros}`);

numeros.fill(0, 2);
console.log(`fill(0, 2) substituiu apenas uma parte do array: ${numeros}`);

//JOIN: Junta os elementos em uma string
console.log("====================");
console.log(`Frutas: ${frutas}`);

console.log(`join(" - "): ${frutas.join(" - ")}`);
console.log(`join(", "): ${frutas.join(", ")}`);
console.log(`join(""): ${frutas.join("")}`);

//------------------------

//Resumo

/* 
Método	    O que faz	            Altera o array?
push()	    Adiciona ao final	    Sim
pop()	    Remove do final	        Sim
shift()	    Remove do início	    Sim
unshift()	Adiciona no início	    Sim
includes()	Verifica se existe	    Não
indexOf()	Retorna o índice	    Não
at()	    Acessa um elemento	    Não
sort()	    Ordena os elementos	    Sim
reverse()	Inverte a ordem	        Sim
fill()	    Substitui valores	    Sim
join()	    Junta em uma string	    Não 
*/
