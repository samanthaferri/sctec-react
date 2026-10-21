/* Crie uma classe `ContaBancaria` com:
● Atributos: `titular` e `saldo` (inicia em 0)
● Método `depositar(valor)` que soma o valor ao saldo
● Método `sacar(valor)` que subtrai do saldo, mas só se tiver saldo suficiente. Se não tiver,
exibir "Saldo insuficiente"
● Método `extrato()` que exibe: `Titular ${nome} | Saldo: R$ ${valor}`
Teste criando uma conta, depositando 500, sacando 200 e mostrando o extrato.
Evolução: Transformar em um module e separar a definição da classe da execução. */

class ContaBancaria {
  titular = "";
  saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Você depositou R$${valor} na sua conta!`);
  }

  sacar(valor) {
    if (this.saldo < valor) {
      console.log(`❌ Valor indisponível para saque!`);
    } else {
      this.saldo -= valor;
      console.log(`Você realizou um saque de R$${valor} na sua conta!`);
    }
  }

  extrato() {
    return `Títular: ${this.titular} | Seu saldo é de R$${this.saldo}`;
  }
}

//Teste
const conta1 = new ContaBancaria("Samantha");
conta1.depositar(10);
conta1.sacar(1);
conta1.sacar(50);
console.log(conta1.extrato());
