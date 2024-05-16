function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
}

function buscarEmailNoBanco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("exemplo@email");
    }, 2000);
  });
}

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;

      if (!deuErro) {
        //SO pode passar uma variavel, para contornar basta passar objeto
        resolve({ time: 2, to: "email" }); //Promessa OK
      } else {
        reject("Filha cheia"); //FALHOU
      }
    }, 2000);
  });
}

async function principal() {
  let id = await pegarId();
  let email = await buscarEmailNoBanco(id);
  try {
    await enviarEmail("Ola", email);
    console.log("Email enviado, par ao usuario com id " + id);
  } catch (erro) {
    console.log("Erro: " + erro);
  }
}

principal();
