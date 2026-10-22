const Receita = require("./receita");

class ReceitaSobremesa extends Receita {
  constructor(nome, ingredientes, tempoPreparoMin, tempoDescansoMin) {
    super(nome, ingredientes, tempoPreparoMin);
    this.tempoDescansoMin = tempoDescansoMin;
  }

  tempoTotal() {
    if (
      Number.isNaN(this.tempoPreparoMin) ||
      Number.isNaN(this.tempoPreparoMin)
    ) {
      console.log(
        `Ocorreu um erro ao tentar calcular o tempo total da receita de ${this.nome}`,
      );
    } else {
      console.log(`Tempo total de preparo: ${this.tempoPreparoMin} `);
    }
  }
}
