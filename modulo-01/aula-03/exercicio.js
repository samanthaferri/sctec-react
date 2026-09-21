//calculadora
let num1 = 6;
let num2 = 3;
let operador = "0";

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