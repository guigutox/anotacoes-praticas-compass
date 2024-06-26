const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const AppointmentService = require("./services/AppointmentService");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/agendamento");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/cadastro", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", async (req, res) => {
  let status = await AppointmentService.Create(
    req.body.name,
    req.body.email,
    req.body.description,
    req.body.cpf,
    req.body.date,
    req.body.time
  );
  if (status) {
    res.redirect("/");
  } else {
    res.send("Erro, ocorreu uma falha!");
  }
});

app.get("/getcalendar", async (req, res) => {
  var appointments = await AppointmentService.GetAll(false);
  res.json(appointments);
});

app.get("/event/:id", async (req, res) => {
  let appointment = await AppointmentService.GetById(req.params.id);
  res.render("event.ejs", { appo: appointment });
});

app.post("/finish", async (req, res) => {
  let id = req.body.id;
  await AppointmentService.Finish(id);
  res.redirect("/");
});

app.get("/list", async (req, res) => {
  //await AppointmentService.Search("343.434.343-43");

  let appos = await AppointmentService.GetAll(true);
  res.render("list", { appos });
});

app.get("/searchresult", async (req, res) => {
  let appos = await AppointmentService.Search(req.query.search);
  res.render("list", { appos });
});

let polltime = 5000;
setInterval(async () => {
 // console.log("polling");

 //await AppointmentService.SendNotification();

}, polltime);

app.listen(3000, () => {});
