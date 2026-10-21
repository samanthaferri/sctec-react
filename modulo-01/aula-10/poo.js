/* 
Os 4 pilares da POO: abstração, encapsulamento, herança e polimorfismo
- ABSTRAÇÃO: guardar do mundo real só o que importa pro sistema
- ENCAPSULAMENTO: os dados e os métodos que mexem neles ficam juntos
- HERANÇA: uma classe aproveita o que a outra já tem
- POLIMORFISMO: o mesmo método responde diferente em cada objeto

NEW
Ele cria o objeto -> liga esse objeto ao molde (classe) -> roda o constructor (se houver) -> devolve o objeto pronto pra usar em uma variável

HERANÇA
é um conceito da POO que permite uma classe reutilizar características e métodos de outra classe.
Em vez de repetir o mesmo código em várias classes diferentes, criamos uma classe mais genérica com tudo que é comum e fazemos outras classes herdarem essas funcionalidades.
A classe que compartilha características é chamada de pai/mãe (superclasse), enquanto as classes que recebem essas características são chamadas de filhas.

EXTENDS
é a palavra reservada utilizada para criar este conceito de herança entre classes.
quando usamos extends, estamos dizendo que uma classe irá herdar atributos e métodos de outra classe.
Assim, a nova classe passa a ter acesso a tudo que existe na classe pai, podendo reutilizar funcionalidades sem precisar recriar o código. 
*/

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, bonus) {
    super(nome, salario);
    this.bonus = bonus;
  }

  salarioTotal() {
    return this.salario + this.bonus;
  }
}
