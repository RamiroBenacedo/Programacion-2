var express = require('express');
var router = express.Router();
const lista = require("../db/lista")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', lista)

module.exports = router;
