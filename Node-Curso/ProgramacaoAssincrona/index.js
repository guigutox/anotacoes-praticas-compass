function enviarEmail(corpo, para, callback) {
  setTimeout(() => {
    /* console.log(`
        Para: ${para}
        -----------------------------
        ${corpo}
        -----------------------------
        De: Guilherme
        `);*/

    //Tratamento de falha

    let deuErro = false;
    if (deuErro) {
      callback(12, "O envio falhou");
    } else {
      callback(12);
    }
    //Possivel passar parametros
  }, 1000);
}

//Situação em que o programa executa não espera o email ser enviado
/*console.log("Iniciando do envio do email");
enviarEmail("Ola", "Joao",);
console.log("Email enviado");
console.log("OK!");*/

/////////////////////////////////////CALL BACK
// CALL BACK - Função que é chamada dentro de outra função

//Passar parametros dentro da arrow function

/*
enviarEmail("Ola", "Joao", (status, amount, time) => {
  console.log(`
        Status: ${status}
        -----------------------------
        Amount: ${amount}
        -----------------------------
        Time: ${time}
    
    `);


  console.log("Tudo certo!");
});
*/



//TRATAMENTO DE ERRO COM CALLBACK

enviarEmail("Ola", "Joao", (time, erro) => {
  if (erro == undefined) {
    console.log("Email enviado com sucesso");
    console.log("Tempo de envio: " + time);
  } else {
    console.log("Ocorreu um erro: " + erro);
  }
});
