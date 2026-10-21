class Animal {
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    comer () {
        console.log(`O ${this.nome} está comendo!`)
    }
}

module.exports = Animal;