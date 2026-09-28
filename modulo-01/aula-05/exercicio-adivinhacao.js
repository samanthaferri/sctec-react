const prompt = require('prompt-sync')();
console.log("JOGO DE ADIVINHAÇÃO!\n\nAntes de começar, vamos definir o intervalo do jogo.\nEscolha o menor e o maior número que poderão aparecer.\n")

//Gerar um número aleatório
const secretNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Definir intervalo mínimo
let randomMin = Number(prompt("Digite o menor número do intervalo: "));
while (Number.isNaN(randomMin)) {
    randomMin = Number(prompt("Hmmm... isso não parece um número. Tente novamente: "));
}

//Definir intervalo máximo e garantir que ele seja maior que o mínimo
let randomMax = Number(prompt("Agora digite o maior número do intervalo: "));

while (Number.isNaN(randomMax) || randomMax <= randomMin) {
    if (Number.isNaN(randomMax)) {
        randomMax = Number(prompt("Hmmm... isso não parece um número. Tente novamente: "))
    } else if (randomMax < randomMin) {
        randomMax = Number(prompt(`Ops! O número máximo não pode ser menor que o número mínimo. Tente novamente: `))
    } else if (randomMax === randomMin) {
        randomMax = Number(prompt(`Ops! O número máximo não pode ser igual ao número mínimo. Tente novamente: `))
    };
}
console.log(`\nPerfeito! O intervalo foi definido de ${randomMin} a ${randomMax}. Agora tente adivinhar o número! 🎯\n`);

//Verificação: ele diz se é maior ou menor
function checkGuess(guess, target) {
    if (guess === target) {
        return `\nAcertou! ${target} era o número secreto.`;
    } else if (guess > target) {
        return "Não foi dessa vez! O número secreto é MENOR!";
    }
    return "Não foi dessa vez! O número secreto é MAIOR!";
}

//Jogo de adivinhação
let guess;
let target = secretNumber(randomMin, randomMax);
console.log(target);
cont = 0;

do {
    guess = Number(prompt(`Digite um número de ${randomMin} a ${randomMax}: `));
    while (Number.isNaN(guess) || guess < randomMin || guess > randomMax) {
        if (Number.isNaN(guess)) {
            guess = Number(prompt(`Hmm... isso não parece um número. Tente novamente: `));
            cont++;
        } else if (guess < randomMin || guess > randomMax) {
            guess = Number(prompt(`Ops! Esse número está fora do intervalo. Escolha um valor entre ${randomMin} e ${randomMax}: `));
            cont++;
        };
    }
    cont++;
    console.log(checkGuess(guess, target));
} while (guess !== target);

//Contagem de tentativas
if (cont === 1) {
    console.log(`De primeira?! Isso foi sorte ou talento?`);
} else if (cont === 2) {
    console.log(`Só ${cont} tentativas! Quase de primeira!`);
} else if (cont === 3) {
    console.log(`Foram ${cont} tentativas... tá, você é bom nisso.`);
}else if (cont <= 5) {
    console.log(`Foram ${cont} tentativas. Nada mal, nada mal...`);
}else if (cont <= 8) {
    console.log(`Foram ${cont} tentativas... mas pelo menos você não desistiu, né?`);
}else if (cont <= 12) {
    console.log(`${cont} tentativas... a essa altura, o número secreto já estava com pena de você.`);
} else {
    console.log(`${cont} tentativas?! Estatisticamente, uma hora tinha que acontecer.`);
}
