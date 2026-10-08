/* Classe → O “molde” para criar objetos
Objeto → A "coisa" criada a partir do molde
Atributos → As características do objeto (nome, idade...)
Constructor → O método que inicializa os atributos
this → Referência ao "objeto atual"
Métodos → As ações que o objeto pode fazer
Herança → Uma classe "herdar" de outra
super → Chamar o construtor da classe pai
Sobrescrita de método → A classe filha substituir um método do pai */

class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //metodo fazer prova
    fazerProva() {
        console.log(`O aluno ${this.nome} está fazendo a prova`)
    }
}

const aluno1 = new Aluno("Samantha", 32);
//console.log(aluno1);
//aluno1.fazerProva();

//exemplo this
class Conta {
    titular = "";
    saldo = 0;

    constructor(titular) {
        this.titular = titular;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado na conta de ${this.titular} com sucesso!`)
    }

    checarSaldo() {
        return `Saldo da conta de ${this.titular}: R$${this.saldo.toFixed(2)}`;
    }
}

const conta1 = new Conta("Samantha");
const conta2 = new Conta("Manuela");

conta1.depositar(10);
console.log(conta2.checarSaldo());