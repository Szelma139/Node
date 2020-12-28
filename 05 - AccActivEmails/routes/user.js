const { response } = require("express");
const express = require("express");
const chalk = require("chalk");
const log = console.log;
const router = express.Router();
//const pool = require("../queries");
const { pool } = require("../queries");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const mailer = require("../nodemail/nofemail");
const { keyword } = require("chalk");
//const {db} = require('../queries2');

router.get("/selectUsers", (request, response) => {
  pool.query("SELECT * from users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

async function getEmailExists(email) {
  const result = await pool.query("SELECT * from users where email = $1", [
    email,
  ]);
  return result.rows.length > 0 ? true : false;
}

router.post("/registerUser", jsonParser, async (req, res) => {
  const { name, email, password } = req.body;
  res.setHeader("Content-Type", "application/json");

  async function insertUser() {
    const t = await pool.query(
      "INSERT INTO users(name,email,password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    return t;
  }
  let d = await getEmailExists(email);
  if (!d) {

    const k = await insertUser().then(res.status(200).send("OK").then(mailer.sendMails(email)));
    return k;
  } else {
    console.log('test');
    return res.status(404).send("<h1>Error my lord</h1>");
  }
});

router.get("/selectUsers/id/:id", (request, response) => {
  const id = request.params.id;
  pool.pool.query(
    "SELECT * from users WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (Array.isArray(results.rows) && !results.rows.length) {
        return response.status(404).send("<h1>Error my lord</h1>");
      }
      return response.status(200).json(results.rows);
    }
  );
});

exports.router = router;
