const { response } = require("express");
const express = require("express");

const router = express.Router();

const pool = require("../queries");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get("/selectUsers",  (request, response) => {
  pool.pool.query("SELECT * from users", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

router.post("/registerUser",jsonParser, (req, res) => {
  const { name, email, password } = req.body;
res.setHeader("Content-Type", "application/json");
console.log(req.body)
  pool.pool.query(
    "INSERT INTO users(name,email,password) VALUES ($1, $2, $3)",[name, email, password],(error, results) => {
      if (error) {
        throw error;
      }
      console.log("data " + name + email + password)
        if (name === undefined){
            return res.status(404).send("Name can't be null,");
        }
   
      return res.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
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
