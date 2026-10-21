const Animal = require('./animal');

class Gato extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade, raca);
    }

    miar() {
        console.log(`Miau`);
    }
}

const gato1 = new Gato("Sushi", 12, "siamês");
gato1.comer();
