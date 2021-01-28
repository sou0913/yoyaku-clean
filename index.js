const express = require("express");
const app = express();

const parser = require("body-parser");
app.use(parser.json());

const cors = require("cors");
app.use(cors());

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./dev.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to Database.");
});

app.post("/reservations", (req, res) => {
  const params = req.body;
  db.run("insert into reservations (date, user_name) values ((?), (?))", [params.date, params.name], (err) => {
    if (err) {
      console.log(err);
      res.status(422).send();
    } else {
      res.status(204).send();
    }
  });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
