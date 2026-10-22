/* 
POO: é uma forma de organizar código onde representamos coisas do mundo real como objettos dentro do prograna!
Cada objeto tem atributos e métodos

Classe → O “molde” para criar objetos
Objeto → A "coisa" criada a partir do molde; muitas vezes são representações do mundo real

Atributos → As características do objeto (nome, idade...)
Os atributos dos objetos representam as propriedades, caracteristicas, o estado daquele objeto em um determinado momento

Métodos → As ações que o objeto pode fazer -> função associada a um objeto
Os métodos dos objetos representam as ações, as operações que esse objeto pode realizar

Uma CLASSE é um molde que define como o objeto deve ser. Ela descreve quais dados o objeto vai ter e quais ações ele pode executar
Mas a classe sozinha não faz nada, é preciso instanciar um objeto a partir dela para usar

Constructor → O método que inicializa os atributos
O constructor é um método especial que roda automaticamente no momento em que você cria um objeto com o new
Ele é responsável por preencher os dados do objeto: sem ele, o objeto nasce vazio

this → Referência ao "objeto atual"
Dentro de uma cçasse, ele serve para o objeto se referir aos seus próprios dados e ações.
Sem o this, o objeto não sabe o que é dele

Herança → Uma classe "herdar" de outra
super → Chamar o construtor da classe pai
Sobrescrita de método → A classe filha substituir um método do pai 
*/

//Classe aluno
class Aluno {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  //metodo fazer prova
  fazerProva() {
    console.log(`O aluno ${this.nome} está fazendo a prova`);
  }
}

//para instanciar um objeto a partir da classe, usamos o "new"
const aluno1 = new Aluno("Samantha", 32);
console.log(aluno1);
aluno1.fazerProva();

//---------------

//Classe conta
class Conta {
  titular = "";
  saldo = 0; //saldo sempre inicializa em zero ao criar um objeto usando a conta

  constructor(titular) {
    this.titular = titular;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor.toFixed(2)} realizado na conta de ${this.titular} com sucesso!`);
  }

  checarSaldo() {
    return `Saldo da conta de ${this.titular}: R$${this.saldo.toFixed(2)}`;
  }
}

const conta1 = new Conta("Samantha");
const conta2 = new Conta("Manuela");

conta1.depositar(10);
console.log(conta2.checarSaldo());
console.log(conta1.checarSaldo());
