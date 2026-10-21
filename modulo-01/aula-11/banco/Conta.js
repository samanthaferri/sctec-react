//A classe Conta não É um cliente, ela TEM um cliente -> não usa extend cliente
class Conta {
  constructor(titular) {
    this.titular = titular; //Classe cliente
    this.saldo = 0; //Number
  }

  depositar(valor) {
    this.saldo += valor;
    console.log("Depósito realizado com sucesso!");
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso!");
      return true; //retorno para conseguir usar o saque na transferência
    } else {
      console.log("Saque não realizado. Saldo insuficiente!");
      return false; //retorno para conseguir usar o saque na transferência
    }
  }

  transferir(valor, contaDestino) {
    if (this.sacar(valor)) {
      contaDestino.depositar(valor);
      console.log("Transferência realizada com sucesso");
    } else {
      console.log("Transferência não realizada.");
    }
  }

  extrato() {
    console.log(`Titular: ${this.titular.nomeCompleto()} | Saldo: R$${this.saldo.toFixed(2)}`); //o nome completo é um método de cliente
  }
}

module.exports = Conta;
