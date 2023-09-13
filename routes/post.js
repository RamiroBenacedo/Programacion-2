var express = require('express');
const posteosController = require('../controllers/posteosController');
var router = express.Router();

 router.get('/detallePost/id/id:', posteosController.detalleDelPost);

 router.get('/agregarPost', posteosController.agregarPost);

module.exports = router;