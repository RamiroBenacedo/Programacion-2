var express = require('express');
const socialController = require('../controllers/socialController');
var router = express.Router();
const data = require("../db/data")


/* GET home page. */
router.get('/', socialController.index )

router.get('/miperfil/id/:id', )

router.get('/miperfil/login/id/:id', )

router.get('/miperfil/registracion/id/:id', )

router.get('/miperfil/editarperfil/id/:id', )

router.get('/resultadobusqueda/id/:id', )

router.get('/detallepost/id/:id', )

router.get('/detalleusuario/id/:id', )

router.get('/agregarpost/id/:id', )


module.exports = router;
