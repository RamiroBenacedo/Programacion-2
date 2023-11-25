var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

/* GET home page. */
router.get('/', mainController.index);

router.get('/login', mainController.login);
router.post('/login', mainController.loginPost);
router.get('/logout', mainController.logout);

router.get('/registro', mainController.registro);
router.post('/registro', mainController.store); 

router.get('/resultadoBusqueda', mainController.busqueda);

module.exports = router;
