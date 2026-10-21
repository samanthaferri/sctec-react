const Conta = require("./Conta");

class ContaCorrente extends Conta {
  constructor(titular, limite) {
    super(titular);
    this.limite = limite;
  }

  sacar(valor) {
    if (valor <= this.saldo + this.limite) {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso!");
      return true;
    } else {
      console.log("Saque não realizado. Saldo insuficiente!");
      return false;
    }
  }
}

module.exports = ContaCorrente;
