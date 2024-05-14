const express = require("express");
const app = express();

//Abre um servidor com express;
app.listen(3000, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log("Servidor iniciado");
  }
});

//Cria uma rota;
//URL "/" é a rota inicial da aplicação
//Não enviar multiplas respostas
app.get("/", function (req, res) {
  res.send("<h1>Bem vindo ao servidor</h1>");
});

//Parametro não obrigatório, ao adicionar o "?" torna o parametro opcional
app.get("/blog/:nome?", function (req, res) {
  let nome = req.params.nome;

  if (nome) {
    res.send("<h1>Bem vindo ao blog " + req.params.nome + "</h1>");
  } else {
    res.send("<h1>Bem vindo ao blog</h1>");
  }
});

//Parametros, vem dentro da variavel e é acessada pela var req.params.nomeparametro
app.get("/ola/:nome/:sobrenome", function (req, res) {
  let nome = req.params.nome;
  let sobrenome = req.params.sobrenome;

  res.send("<h1>Ola " + req.params.nome + " " + req.params.sobrenome + "</h1>");
});

//Query params

app.get("/canal/youtube", function (req, res) {
  var canal = req.query["canal"];

  if (!canal) {
    res.send("<h1>Bem vindo ao canal youtube</h1>");
  }else{
    res.send("<h1>Bem vindo ao canal " + canal + "</h1>");
  }
  
})
