/* 
Funções são blocos de código que você cria uma vez e pode usar quantas vezes quiser!
Em vez de repetir as mesmas linhas toda hora, você agrupa tudo dentro de uma função, dá um nome para ela, e só depois chama essa função quando quiser usá-la.

São tarefas, rotinas, ações que são executadas somente quando são chamadas ou quando ocorre algum evento

CASOS DE USO
-> Evitar repetição
-> Separar responsabilidades
-> Reaproveitar lógica de valores diferentes
-> Facilitar a leitura do código

ELEMENTOS
-> function: palavra reservada que diz ao javascript "estou criando uma função"
-> (): parênteses onde podem entrar os parâmetros (informações que a função precisa para trabalhar). Pode ficar vazio se ela não precisar de nenhuma informação.
-> {}: chaves que delimitam o bloco de código que será executado toda vez que a função for chamada

RETURN: Quando uma função encontra o return, ela para de executar e entrega aquele valor de volta para quem chamou
-> Guardar o resultado em uma variável
-> Usar dieto dentro de outra operação
-> Passar como argumento para outra função
-> Tomar decisões posteriores com if 
*/

//exemplo de função
function saudacao() {
  console.log("Hello world!!");
}
saudacao(); //chamou a função

//---------

//exemplo de função com parâmetros
function apresentacao(nome, idade) {
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

apresentacao("Samantha", 31);

//---------

//função de soma
function soma(a, b) {
  console.log(`Somando ${a} com ${b}`);
  return a + b;
}

let resultado = soma(2, 5);
console.log(`Resultado: ${resultado}`);

//---------

//atribuindo valor ao parâmetro caso esse nao seja declarado
function usuario(nome = "usuário") {
  console.log(`Bem-vindo, ${nome}!`);
}

usuario("Samantha");
usuario();

//---------

//função com cálculo que avalia se o usuário é maior ou menor de idade
function maiorDeIdade(dataAniversario, anoAtual) {
  //DD/MM/AAAA
  let anoAniversario = dataAniversario.split()[2];
  return Number(anoAtual) - Number(anoAniversario) >= 18;
}

maiorDeIdade("25/08/1994", 2026);
if (maiorDeIdade) {
  console.log(`É maior de idade!`);
} else {
  console.log("É menor de idade!");
}
