const prompt = require('prompt-sync')();

//armazenam vários valores em uma única variável e são organizados por índice
const frutas = ["maçã", "banana", "limão"];
console.log(frutas);

//acessar um item: nome[posicao]
console.log(frutas[0]);

//último item do array: lenght - 1
console.log(`Tamanho do array: ${frutas.length}`);
console.log(`Última nota do array: ${frutas[frutas.length - 1]}`)

//trocar valores do array em const (nao altera a constante, mas os elementos)
frutas[2] = "pêra";
frutas[frutas.length] = "uva";
console.log(`Nova fruta adicionada: ${frutas}`)

//notas
let nota1 = Number(prompt(`Insira a primeira nota: `));
let nota2 = Number(prompt(`Insira a primeira nota: `));
let nota3 = Number(prompt(`Insira a primeira nota: `));

//o push adiciona itens do array
let notas = [];
notas.push(nota1);
notas.push(nota2);
notas.push(nota3);

console.log(`Array de notas: ${notas}`);

console.log(`Primeira nota: ${notas[0]}`);
console.log(`Segunda nota: ${notas[1]}`);
console.log(`Primeira nota: ${notas[2]}`);

//o pop remove itens do array
let itemRemovido = notas.pop();
console.log(`Nota removida: ${notas}\nNota removida: ${itemRemovido}`);

//shift -> remove da primeira posição
//unshift -> adiciona na primeira posição
//includes -> verifica se tem determinado valor no array
//indexOf -> descobre o index daquele elemento
//at -> tipo o index, mas qd quer do array direto [x, y].at(1)
//sort -> ordena o array (menor pro menor e/ou ordem alfabética)
//reverse -> reverter, de tars p frente
//fill -> preenche todos os itens do array c oq vc colocar no fill
//join -> escolhe um separador dos elementos do array



