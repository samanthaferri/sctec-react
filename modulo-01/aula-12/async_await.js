/* 
ASYNC/AWAIT
Deixa o assíncrono com cara de síncrono (de cima para baixo)
*/

function checarEstoque(quantidade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantidade > 0) resolve(`Em estoque: ${quantidade}`);
      else reject("Produto esgotado.");
    }, 1000);
  });
}

async function mostrarEstoque() {
  console.log("Procurando estoque...");
  let message;
  try {
    message = await checarEstoque(8);
  } catch (error) {
    message = error;
  }
  console.log(message);
}

console.log("Iniciando");
mostrarEstoque();
console.log("Seguindo");
