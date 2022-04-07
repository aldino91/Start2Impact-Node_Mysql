const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const path = require("path");
const db = require("./database/db");
const router = require("./routers/router");
const app = express();

app.use(cors());

require("dotenv").config({ path: "./.env" });

require("./database/db");
app.use(express.static(path.join(__dirname, "images")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT || 9000, () => {
  console.log("Abbiamo il server!!");

  db.authenticate()
    .then(() => {
      console.log("Connessione realizzata con successo!");
    })
    .catch((err) => {
      console.error("abbiamo probblemi per la connessione al server!", err);
    });
});
