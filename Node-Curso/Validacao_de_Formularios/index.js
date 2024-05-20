const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser("keyboard cat"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000000000 },
  })
);

app.use(flash());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form", (req, res) => {
  let { email, nome, pontos } = req.body;

  let emailError;
  let pontosError;
  let nomeError;

  if (email == undefined || email == "") {
    emailError = "Email obrigatório";
  }

  if (pontos == undefined || pontos < 20) {
    pontosError = "Pontos obrigatórios e deve ser maior que 20";
  }

  if (nome == undefined || nome == "") {
    nomeError = "Nome obrigatório";
  }

  if (
    emailError != undefined ||
    pontosError != undefined ||
    nomeError != undefined
  ) {
    res.redirect("/");
  } else {
    req.flash("email", email);
    req.flash("pontos", pontos);
    req.flash("nome", nome);
  }

  res.send(email);
});

app.listen(3000, (req, res) => {
  console.log("Servidor iniciado na porta 3000");
});
