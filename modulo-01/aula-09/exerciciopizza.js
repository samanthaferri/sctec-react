/* Crie uma classe Pizza com:
 ● Atributos: sabor, tamanho (P, M ou G) e borda (true ou false)
 ● Método calcularPreco() que retorna o preço baseado no tamanho:
    ● P = R$ 25,00
    ● M = R$ 35,00
 ●   G = R$ 50,00
 ● Método resumo() que exibe no console todas as informações e o preço final. `Pizza ${tamanho}
com/sem borda custará R$ ${valor} reais */

class Pizza {
    constructor(sabor, tamanho, borda) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.borda = borda;
    }

    calcularPreco() {
        let valor = 0;
        switch (this.tamanho) {
            case 'P':
                valor = 25;
                break;
            case 'M':
                valor = 35;
                break;
            case 'G':
                valor = 55;
                break;
        }
    }

    resumo() {
        console.log(`A pizza ${this.tamanho} ${this.sabor} ${this.borda}`);
    }
}

const pizza1 = new Pizza("pepperoni", "M", true)
console.log(pizza1);