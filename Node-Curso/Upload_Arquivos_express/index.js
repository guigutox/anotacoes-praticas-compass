const express = require("express");
const app = express();
const multer = require("multer");

app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname + "-" + Date.now());
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("Arquivo enviado");
});

app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000");
});
