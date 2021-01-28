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

app.get("/reservations/", (req, res) => {
  db.all("select * from reservations", function (err, row) {
    if (err) throw err;
    res.send(row);
  });
});

app.post("/reservations", (req, res) => {
  console.log(req.body);
  // db.exec('insert into reservations values ...');
  res.status(204).send();
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
