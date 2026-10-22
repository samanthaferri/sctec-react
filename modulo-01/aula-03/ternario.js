/* Operador Ternário: 3 operandos
condição ? true : false
 */

let idade = 20;
let maioridade = idade >= 18 ? "Adulto" : "Menor de idade";
console.log(maioridade);

//ternario para media do aluno
let mediaAluno = 6;
let resultadoSemestre = mediaAluno >= 7 ? "Aprovado" : "Reprovado";
console.log(resultadoSemestre);

//media do aluno se feita com if normal
let resultadoAluno;
if (mediaAluno >= 7) {
  resultadoAluno = "Aprovado";
} else {
  resultadoAluno = "Reprovado";
}
console.log(resultadoAluno);

//par ou impar
let numero = 3;
let parOuImpar = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(parOuImpar);
