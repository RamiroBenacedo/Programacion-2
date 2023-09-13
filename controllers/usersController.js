const data = require("../db/data")

const usersController = {
    miPerfil: function (req, res, next) {
        res.render ('miPerfil', {lista: data.usuarios, posteos: data.posteos});
    },

    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', title = 'Express');
    },

    detalleUsuario: function (req, res, next) {
        let id = req.params.id
        res.render ('detalleusuario', {idUsuario: id, usuario: data.usuarios, posteo: data.posteos});
    }
};

module.exports = usersController
