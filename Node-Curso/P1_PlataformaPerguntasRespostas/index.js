const express = require("express");
const app = express();

//Declarando o EJS como view engine

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/perguntar", function (req, res) {
    res.render("perguntar");
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});
