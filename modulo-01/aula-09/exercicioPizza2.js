/* Crie uma classe Pizza com:
 ● Atributos: sabor, tamanho (P, M ou G) e borda (true ou false)
 ● Método calcularPreco() que retorna o preço baseado no tamanho:
    ● P = R$ 25,00
    ● M = R$ 35,00
 ●   G = R$ 50,00
 ● Método resumo() que exibe no console todas as informações e o preço final. `Pizza ${tamanho}
com/sem borda custará R$ ${valor} reais */

class Pizza {
  sabor = "";
  tamanho = "";
  borda = false;
  valor = 0;
  valorBorda = 0;
  valorTotal = this.valor + this.valorBorda;

  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho.toUpperCase();
    this.borda = borda;
    this.calculaPreco();
  }

  calculaPreco() {
    //cálculo tamanho
    switch (this.tamanho) {
      case "P":
        this.valor = 25;
        break;
      case "M":
        this.valor = 35;
        break;
      case "G":
        this.valor = 50;
        break;
      default:
        console.log("❌ Valor inválido! Temos os tamanhos P, M e G\n");
        break;
    }

    //cálculo borda
    if (this.borda) {
      this.borda = "Sim";
      this.valorBorda = 10;
    } else {
      this.borda = "Não";
    }

    this.valorTotal = this.valor + this.valorBorda;
    return this.valorTotal;
  }

  resumoPedido() {
    console.log(`====== Pedido pizza ======`);
    console.log(`Sabor: ${this.sabor}`);
    console.log(`Tamanho: ${this.tamanho} ..................R$${this.valor}`);
    console.log(`Borda: ${this.borda} ..................R$${this.valorBorda}`);
    console.log(`Valor total ..................R$${this.valorTotal}`);
  }
}

const pedido1 = new Pizza("Pepperoni", "P", true);

console.log(pedido1);
console.log("\n.............................................................\n");
pedido1.resumoPedido();

console.log("\n.............................................................\n");
const pedido2 = new Pizza("Frango", "m", false);
console.log(pedido2);
console.log("\n.............................................................\n");
pedido2.resumoPedido();
