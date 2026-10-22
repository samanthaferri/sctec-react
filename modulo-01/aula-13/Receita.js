const ingredientes = require("./despensa");

class Receita {
  constructor(nome, ingredientes, tempoPreparo) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.tempoPreparo = tempoPreparo;
  }

  exibeDetalhes() {
    console.log(`\n===== Receita: ${this.nome} =====\n`);
    console.log(
      `A receita de ${this.nome} tem ${this.ingredientes.length} ingredientes, e leva ${this.tempoPreparo}min para ficar pronta`,
    );
    console.log(`Ingredientes: ${ingredientes.join(", ").toLowerCase()}\n`);
  }

  compararIngredientes(itensDisponiveis) {
    const possui = [];
    const falta = [];

    //o for each percorre os ingredientes da receita
    this.ingredientes.forEach((ingrediente) => {
      //O find() procura o ingrediente na despensa -> percorre o array itensDisponiveis procurando o primeiro elemento que satisfaça a condição.
      const itemEncontrado = itensDisponiveis.find((item) => {
        //item representa cada elemento da despensa
        return item.toLowerCase() === ingrediente.toLowerCase(); //retorna o item
      });

      //verifica se encontrou aquele ingrediente do array que está sendo percorrido
      if (itemEncontrado) {
        possui.push(ingrediente); //acrescenta na lista de possui caso o ingreditente tenha sido encontrado
      } else {
        falta.push(ingrediente); //acrescenta na lista de falta caso não tenha sido encontrado o ingrediente
      }
    });

    if (possui.length > 0) {
      console.log(`● Itens disponíveis: ${possui.join(", ")}`);
    } else {
      console.log(`● Itens disponíveis: -`);
      console.log(`  Você não possui nenhum ingrediente da receita.`);
    }

    if (falta.length > 0) {
      console.log(`● Itens faltando: ${falta.join(", ")}`);
    } else {
      console.log(`● Itens faltando: -`);
      console.log(
        "  Você tem todos os ingredientes necessários para essa receita.",
      );
    }
  }
}

module.exports = Receita;
