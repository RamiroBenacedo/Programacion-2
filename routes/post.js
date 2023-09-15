var express = require('express');
const posteosController = require('../controllers/posteosController');
var router = express.Router();

 router.get('/detalle/id/:id', posteosController.detallePost);

 router.get('/agregarPost', posteosController.agregarPost);

module.exports = router;