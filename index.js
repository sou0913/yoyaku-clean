const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./dev.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to Database.");
});

app.get("/reservations/new", (req, res) => {
    db.all('select * from reservations', function (err, row) {
        if (err) throw err;
        console.log(row);
        res.send(row);
    })
});

app.post("/reservations", (req, res) => {});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
