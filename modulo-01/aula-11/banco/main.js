const Conta = require("./Conta");
const ContaCorrente = require("./ContaCorrente");
const Cliente = require("./Cliente");

//criar um cliente
const titular1 = new Cliente("Samantha", "Ferri", "25/08/1994", "48999168856", "samantha@gmail.com", "Avenida Brasil, 1609");
const titular2 = new Cliente("Henrique", "Vetter", "12/11/2000", "51999145577", "henrique@gmail.com", "Avenida Brasil, 1609");

const contaSamantha = new Conta(titular1);
console.log("===== Conta Samantha =====");
contaSamantha.extrato();
contaSamantha.depositar(50);
contaSamantha.sacar(100);
contaSamantha.sacar(25);
contaSamantha.extrato();
console.log("\n..................................\n");

const ccHenrique = new ContaCorrente(titular2, 500);
console.log("===== Conta Henrique =====");
ccHenrique.extrato();
ccHenrique.depositar(100);
ccHenrique.sacar(600);
ccHenrique.extrato();
console.log("\n..................................\n");

//transferência Samantha -> Henrique
console.log("===== TRANSFERÊNCIAS =====");
contaSamantha.transferir(20, ccHenrique);
contaSamantha.extrato();
ccHenrique.extrato();
ccHenrique.transferir(100, contaSamantha);
