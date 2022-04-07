const Sequelize = require("sequelize");

require("dotenv").config({ path: "./.env" });

const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});



db.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas!");
  })
  .catch(() => {
    console.log("No hemos podido sincronizar las tablas!");
  });

module.exports = db;
