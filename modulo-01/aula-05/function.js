function saudacao() {
    console.log("Hello world!!");
}

saudacao();

//---------

function soma(a, b) {
    console.log(`Somando ${a} com ${b}`);
    return a + b;
}

let resultado = soma(2, 5);
console.log(resultado);

//---------

function apresentacao(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
}

apresentacao("Samantha", 31);

//---------

function usuario(nome = "usuário") {
    console.log(`Bem-vindo, ${nome}!`);
}

usuario("Samantha");
usuario();

//---------

function maiorDeIdade(dataAniversario, anoAtual) { //DD/MM/AAAA
    let anoAniversario = dataAniversario.split()[2];
    return Number(anoAtual) - Number(anoAniversario) >= 18;
}

maiorDeIdade("25/08/1994", 2026);
if (maiorDeIdade) {
    console.log(`É maior de idade!`);
} else {
    console.log("É menor de idade!");
}