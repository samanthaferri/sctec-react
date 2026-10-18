/* 
Estrutura do for:
for (let i = 0; i <= 5; i++) {}
- let i: 1
- condição: i <= 5 (repete enquanto for verdade)
- passo: i++ (muda a cada vez)
*/

console.log("======================");
console.log("Loop para i <= 5\n");

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("======================");

//tabuada
console.log("Tabuada do 5\n");
for (let i = 0; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("======================");

//descrescente: o valor vai diminuindo
console.log("Loop descrécimo de 5\n");
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
