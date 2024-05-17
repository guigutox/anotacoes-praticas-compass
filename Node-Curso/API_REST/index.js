const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var DB = {
  games: [
    {
      id: 1,
      name: "Super Mario Odyssey",
      year: 2017,
      price: 300,
    },
    {
      id: 2,
      name: "Mario Kart 8",
      year: 2014,
      price: 200,
    },
    {
      id: 3,
      name: "Super Smash Bros. Ultimate",
      year: 2018,
      price: 400,
    },
  ],
};

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
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
  let { name, year, price } = req.body;

  DB.games.push({
    id: DB.games.length + 1,
    name,
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
      let { name, year, price } = req.body;

      if (name != undefined) {
        game.name = name;
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

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
