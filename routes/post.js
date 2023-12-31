var express = require('express');
const posteosController = require('../controllers/posteosController');
var router = express.Router();

router.get('/detalle/id/:id', posteosController.detallePost);

router.get('/agregar', posteosController.agregarPost);

router.post('/agregar', posteosController.storeAgregarPost);

router.get('/deletePost/id/:id', posteosController.deletePost);

router.get('/editPost/id/:id', posteosController.editPost);

router.post('/updatePost/id/:id', posteosController.updatePost);

router.post('/crearcomentario/id/:id', posteosController.crearComentario);


module.exports = router;