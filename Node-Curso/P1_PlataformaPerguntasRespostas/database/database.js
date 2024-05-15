const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "0212", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;