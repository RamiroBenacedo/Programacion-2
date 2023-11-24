var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

router.get('/miPerfil/id/:id', usersController.miPerfil);

router.get('/editarPerfil/id/:id', usersController.editarPerfil);
router.post('/editarPerfil/id/:id', usersController.updatePerfil);


router.get('/detalleUsuario/id/:id', usersController.detalleUsuario);


module.exports = router;
