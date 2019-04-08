const express = require('express');
const router = express.Router();
const MySQL = require("mysql")

const connection = MySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "dbname"
})

connection.connect((err) => {
  if (err) {
    console.log("Error in connection")
  } else {
    console.log("Connected");

  }
})


/* GET home page. */
router.get('/', (req, res, next) => {
  connection.query("SELECT * FROM projects", function (err, rows, fields) {
    if (!!err) {
      res.status(500).json({
        message: 'Error en el servicio'
      })
    } else {
      res.status(200).json({
          rows
        })
    }
  })
});

module.exports = router;