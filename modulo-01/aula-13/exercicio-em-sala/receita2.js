class Receita {
  constructor(nome, ingredientes, tempoPreparoMin) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.tempoPreparoMin = tempoPreparoMin;
  }

  exibirDetalhes() {
    console.log(
      `Receita de ${this.nome}, usa ${this.ingredientes.lenght} ingredites, e leva ${this.tempoPreparoMin} minutos.`,
    );
  }

  compararIngredientes(itensDisponiveis) {
    const possui = [];
    const falta = [];

    this.ingredientes.forEach((ingrediente) => {
      const encontrado = itensDisponiveis.filter((item) => {
        return item.toLowerCase() === ingrediente.toLowerCase();
      });
      if (encontrado.lenght > 0) {
        possui.push(ingrediente);
      } else {
        falta.push(ingrediente);
      }
    });

    if (possui.length > 0) {
      console.log(`Ingredientes disponìveis: ${possui.join(", ")}`);
    } else {
      console.log("Nenhum ingrediente disponível");
    }

    if (falta.length > 0) {
      console.log(`Ingredientes faltando: ${falta.join(", ")}`);
    } else {
      console.log("Não falta nenhum ingrediente");
    }
  }
}

module.exports = Receita;
