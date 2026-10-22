const prompt = require("prompt-sync")();

/* 
 switch-case é uma estrutura usada quando você precisa comparar uma variável com vários valores possíveis. 
 em vez de vários if/else, ele organiza de forma mais clara e estruturada
 - multiplas condições baseadas no mesmo valor
 - substituir vários if/else if
 - melhorar organização do  código
 - facilitar manutenção quando há muitas opções 
*/

//calculadora
let num1 = 6;
let num2 = 3;
let operador = prompt("Escolha uma operação (+, -, *, / ou %): ");

switch (operador) {
  case "+":
    resultado = num1 + num2;
    console.log("soma: " + num1 + " + " + num2 + " = " + resultado);
    break;
  case "-":
    resultado = num1 - num2;
    console.log("subtração: " + num1 + " - " + num2 + " = " + resultado);
    break;
  case "*":
    resultado = num1 * num2;
    console.log("multiplicação: " + num1 + " * " + num2 + " = " + resultado);
    break;
  case "/":
    resultado = num1 / num2;
    console.log("divisão: " + num1 + " / " + num2 + " = " + resultado);
    break;
  case "%":
    resultado = num1 % num2;
    console.log("resto da divisão: " + num1 + " % " + num2 + " = " + resultado);
    break;
  default:
    console.log("Digite um operador válido!");
}
