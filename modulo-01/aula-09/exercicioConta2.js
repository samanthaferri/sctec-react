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
    console.log(`\n💰 Adicionando R$${valor} à sua conta...`);
    return this.saldo;
  }

  sacar(valor) {
    if (this.saldo < valor) {
      console.log("\n❌ Saldo insuficiente! Saque não realizado.");
      return;
    } else {
      this.saldo -= valor;
      console.log(`\n💰 Sacando R$${valor} da sua conta...`);
      return this.saldo;
    }
  }

  extrato() {
    console.log(`Titular: ${this.titular} | Saldo: ${this.saldo}`);
  }
}

const contaSamantha = new ContaBancaria("Samantha");

contaSamantha.depositar(50);
contaSamantha.sacar(65);
contaSamantha.depositar(15);
contaSamantha.sacar(2);

console.log("\n............................................\n");
contaSamantha.extrato();
console.log("\n............................................\n");
