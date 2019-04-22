const express = require('express');
const router = express.Router();
const MySQL = require("mysql")
const DS = require('../DS.js')
const EP = require('../EP.js')

router.get('/ds', (req, res, next) => {
      res.status(200).json(DS)
});
router.get('/ep', (req, res, next) => {
  res.status(200).json(EP)
});

module.exports = router;