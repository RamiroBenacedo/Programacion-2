var express = require('express');
var router = express.Router();
const data = require("../db/data")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the future of internet' });
});



module.exports = router;
