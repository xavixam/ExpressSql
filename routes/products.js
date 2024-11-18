const express = require("express");
const router = express.Router();
const db = require("../config/database")

router.post("/", (req, res) => {
  console.log(req.body);
  let sql = `INSERT INTO posts (title, body) values
            ('${req.body.title}', '${req.body.body}');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Post added...");
  });
});