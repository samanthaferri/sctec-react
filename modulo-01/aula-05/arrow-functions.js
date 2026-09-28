//exemplos
const soma = (a,b) => a + b;
const saudacao = () => "Hello world!";
//funcao da aula anterior vs arrow function
function precoFinal(preco, desconto) {
    return preco - (preco * desconto / 100);
}

const precoFinal2 = (preco, desconto) => (preco - (preco * desconto / 100)); 

// resultados
console.log(`Arrow function vazia: ${saudacao()}`);
console.log(`Arrow funcion de soma: ${soma(1,2)}`);
console.log(`Exercício sem arrow function: ${precoFinal(150, 10)}`);
console.log(`Mesmo exercício com arrow function: ${precoFinal2(150, 10)}`);

//exercicio: funcao que devolve a media de nota 1 e nota 2
//função normal, sem arrow functions
function media(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
//função usando arrow function
const mediaArrow = (nota1, nota2) => (nota1 + nota2) / 2;

console.log(`Função de média sem arrow funcions: ${media(10, 8)} \nFuncao de media com arrow functions: ${mediaArrow(10, 8)} `);