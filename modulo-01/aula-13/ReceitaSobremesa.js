const Receita = require("./Receita");

class ReceitaSobremesa extends Receita {
  constructor(
    nome,
    ingredientes,
    tempoPreparo,
    tempoDescanso
  ) {
    super(nome, ingredientes, tempoPreparo);
    this.tempoDescanso = tempoDescanso;
  }

  tempoTotal() {
    if (Number.isNaN(this.tempoPreparo) || Number.isNaN(this.tempoDescanso)) {
      console.log(
        `Tempo total de preparo: ${this.tempoPreparo + this.tempoDescanso}`,
      );
    } else {
      console.log(
        `Ocorreu um erro ao tentar calcular o tempo total da receita ${this.nome}.`,
      );
    }
  }
}

module.exports = ReceitaSobremesa;
