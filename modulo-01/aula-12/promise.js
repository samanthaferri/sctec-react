/* 
PROMISE
uma "promessa" de um valor que vem DEPOIS

Duas saídas:
- resolve(valor) (deu certo)
- reject(erro) (deu errado)
cada passo vira um .then

ESTADO DE UMA PROMISE
- Pendente: foi criada e ainda está esperando
- Resolvida: chamou resolve - tem um valor
- Rejeitada: chamou reject - tem um erro
- Só muda de estado UMA VEZ; depois disso, está decidida
*/

function checarEstoque(quantidade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantidade > 0) resolve(`Em estoque: ${quantidade}`);
      else reject("Produto esgotado.");
    }, 1000);
  });
}

checarEstoque(0) // maior que 0 vai no .then, e menor vai no .catch
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

console.log("Esperando a promise");
console.log("mas sigo executando o código");
