let pdf = require("html-pdf");

let nomeDoUsuario = "Guilherme";

let conteudo = `

<h1>PDF MELHORADO</h1>
<hr>
<p> Bem vindo ${nomeDoUsuario}</p>

`;

pdf.create(conteudo, {}).toFile("./meuPDF.pdf", (err, res) => {
  if (err) {
    console.log("Ocorreu um erro :(");
  } else {
    console.log(res);
  }
});
