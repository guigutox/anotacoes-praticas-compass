function pegarUsiarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Guilherme", lang: "JS" },
        { name: "João", lang: "Python" },
        { name: "Maria", lang: "Java" },
      ]);
    }, 2000);
  });
}

async function principal() {
  //pegarUsiarios().then((result) => console.log(result));
  //AWAIT SEGURA A EXECUÇÃO DAS FUNÇOES ASSINCRONAS
  let users = await pegarUsiarios();
  console.log(users);
}

principal();


