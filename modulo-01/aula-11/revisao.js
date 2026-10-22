/* 
REVISÃO de POO
- Numa subclasse, super() vem PRIMEIRO; só depois usa this

- A classe filha pode REESCREVER um método da mãe com o mesmo nome.
Quando o nome repete, vale o da filha

- Use herança quando a frase "a filha É UMA mãe" faz sentido -> student é um user

- Herança demais engessa; Na dúvida, comece sem
*/

//extends HERDAR
// classe mãe
class User {
  constructor(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
  }

  login() {
    console.log(`\nUsuário(a) ${this.name} entrou no sistema`);
  }

  showCredentials() {
    console.log(`\n===== Credentials ${this.name} =====`);
    console.log(`Login: ${this.username}`);
    console.log(`Password: ${this.password}`);
  }
}

// classe filha
class Student extends User {
  course = "";
  constructor(
    name,
    username,
    password,
    course
  ) {
    super(name, username, password); // reaproveita o construtor de user
    this.course = course; // atributo apenas de student -> o this NÃO PODE ser antes do super()
  }

  showCredentials() {
    super.showCredentials(); // pega os atributos da classe mãe
    console.log(`Course: ${this.course}`); // acrescenta um novo atributo, além dos da mãe
  }

  showCourse() {
    console.log(`\nThe student ${this.name} is studying ${this.course}`);
  }
}

//classe filha
class Employee extends User {
  constructor(
    name,
    username,
    password,
    role
  ) {
    super(name, username, password);
    this.role = role;
  }

  showRole() {
    console.log(`\nUser ${this.name} is ${this.role}`);
  }

  showCredentials() {
    super.showCredentials(); // pega os atributos da classe mãe
    console.log(`Role: ${this.role}`); // acrescenta um novo atributo, além dos da mãe
  }
}

//instanciar objetos
const samantha = new Student("Samantha", "samanthaferri", "1234", "Computer Science");
const manuela = new Employee("Manuela", "manuelaferri", "5678", "Teacher");

//usando os usuários individualmente (teste)
console.log(`\n===== Login =====`);
samantha.login(); //herdado de user
manuela.login();
console.log("\n..........................................\n");

console.log(`\n===== Show course and role =====`);
samantha.showCourse(); // próprio do student
manuela.showRole(); // próprio do employee
console.log("\n..........................................\n");

console.log(`\n===== CREDENTIALS =====`);
samantha.showCredentials(); //herdou de users + novo atributo
manuela.showCredentials();

//objeto de usuários instanciados
const users = [
  samantha,
  manuela,
];

console.log(`\n===== CREDENTIALS: using users array =====`);
users.forEach((user) => {
  user.showCredentials();
});
