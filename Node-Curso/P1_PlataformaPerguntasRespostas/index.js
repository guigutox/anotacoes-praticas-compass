const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const Pergunta = require("./database/Pergunta.js");

//Conectando ao banco de dados

connection.authenticate().then(() => {
  console.log("Conectado com sucesso ao banco de dados!");
});

//Declarando o EJS como view engine

app.set("view engine", "ejs");
app.use(express.static("public"));

//Configurando o body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configurando as rotas
app.get("/", function (req, res) {
  Pergunta.findAll({raw : true}).then((perguntas) => {
    res.render("index",{
      perguntas: perguntas
    });
  });
  
});

app.get("/perguntar", function (req, res) {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});
