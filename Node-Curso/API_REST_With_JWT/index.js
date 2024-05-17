const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "amkgfmaçkgçzmgzmgç";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function auth(req, res, next) {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    let token = bearer[1];

    jwt.verify(token, JWTSecret, (err, data) => {
      if (err) {
        res.status(401);
        res.json({ ERRO: "Token inválido ou expirado" });
      } else {
        req.token = token;
        req.loggedUser = { id: data.id, name: data.name };
        next();
      }
    });
  } else {
    res.status(401);
    res.json({ ERRO: "Token ausente ou inválido" });
  }

  next();
}

var DB = {
  games: [
    {
      id: 1,
      title: "Super Mario Odyssey",
      year: 2017,
      price: 300,
    },
    {
      id: 2,
      title: "Mario Kart 8",
      year: 2014,
      price: 200,
    },
    {
      id: 3,
      title: "Super Smash Bros. Ultimate",
      year: 2018,
      price: 400,
    },
  ],
  users: [
    {
      id: 2,
      name: "Guilherme",
      email: "g@h.com",
      password: "123456",
    },
    {
      id: 1,
      name: "Beatriz",
      email: "b@h.com",
      password: "123456",
    },
  ],
};

app.get("/games", auth, (req, res) => {
  res.statusCode = 200;
  res.json({ games: DB.games, token: req.token, user: req.loggedUser }); //DB.games);
});

app.get("/games/:id", (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    let id = parseInt(req.params.id);

    let game = DB.games.find((g) => g.id === id);

    if (game != undefined) {
      res.status(200);
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

//Cadastrar jogo
app.post("/games", (req, res) => {
  let { title, year, price } = req.body;

  DB.games.push({
    id: DB.games.length + 1,
    title,
    year,
    price,
  });

  res.sendStatus(200);
});

app.delete("/games/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    let index = DB.games.findIndex((g) => g.id === id);

    if (index == -1) {
      res.sendStatus(404);
    } else {
      DB.games.splice(index, 1);
      res.sendStatus(200);
    }
  }
});

app.put("/games/:id", (req, res) => {
  let id = req.params.id;

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    let id = parseInt(req.params.id);

    let game = DB.games.find((g) => g.id === id);

    if (game != undefined) {
      let { title, year, price } = req.body;

      if (title != undefined) {
        game.title = title;
      }
      if (year != undefined) {
        game.year = year;
      }
      if (price != undefined) {
        game.price = price;
      }

      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/auth", (req, res) => {
  let { email, password } = req.body;

  if (email != undefined) {
    let user = DB.users.find((u) => u.email == email);

    if (user != undefined) {
      if (user.password == password) {
        jwt.sign(
          { id: user.id, email: user.email },
          JWTSecret,
          { expiresIn: "48h" },
          (err, token) => {
            if (err) {
              res.status(400);
              res.json({ ERRO: "Falha ao gerar o token" });
            } else {
              res.status(200);
              res.json({ token: token });
            }
          }
        );
        res.status(200);
      } else {
        res.json({ ERRO: "Credencial inválida" });
      }
    } else {
      res.status(404);
      res.json({ ERRO: "Email não existe no banco de dados" });
    }
  } else {
    res.status(400);
    res.json({ ERRO: "Email inválido" });
  }
});

app.listen(3002, () => {
  console.log("Servidor rodando na porta 3001");
});
