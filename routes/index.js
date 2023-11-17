var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

/* GET home page. */
router.get('/', mainController.index);

router.get('/login', mainController.login);
router.get('/login', mainController.loginPost);

router.get('/registracion', mainController.registro);
router.post('/registracion', mainController.registro); /* cambiar el maincontroller. */

module.exports = router;
