/*function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = true;

      if (!deuErro) {
        resolve(); //Promessa OK
      } else {
        reject(); //FALHOU
      }
    }, 2000);
  });
} 

enviarEmail("Ola", "Joao")
  .then(() => console.log("OK! A promessa foi cumprida")) //THEN TRATA QUANDO PROMISSE É CUMPRIDA
  .catch(() => console.log("Erro")); //CATCH TRATA QUANDO A PROMISSE FALHA

*/

//////////////////////////////////Passar parametro dentro de promisse
/*
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

enviarEmail("Ola", "Joao")
  .then(({ time, to }) => console.log(`Time: ${time} | Para: ${to}`)) //THEN TRATA QUANDO PROMISSE É CUMPRIDA
  .catch((erro) => console.log("Erro: " + erro)); //CATCH TRATA QUANDO A PROMISSE FALHA
*/
////////////////////////////////////// Promise aninhada ou promise hell
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

pegarId().then((id) => {
  buscarEmailNoBanco(id)
    .then((email) => {
      enviarEmail("Olha, como vai?" + email).then(() => {
        console.log("Email enviado, par ao usuario com id " + id);
      });
    })
    .catch((erro) => {
      console.log("Erro: " + erro);
    });
});
