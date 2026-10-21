const Animal = require('./animal');

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade, raca);
    }

    latir() {
        console.log(`Auau`);
    }
}

const cao1 = new Cachorro("Rex", 6, "SRD");
cao1.comer();