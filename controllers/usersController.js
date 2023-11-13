const data = require("../db/data")
const db= require("../database/models")
const usersController = {
    miPerfil: function (req, res) {
        let id = req.params.id
        res.render ('miPerfil', {idUsuario: id, usuario: data.usuarios, posteos: data.posteos});
    },

    editarPerfil: function(req, res) {
        res.render('editarPerfil');
    },

    detalleUsuario: function (req, res) {
        let id = req.params.id
        res.render ('detalleUsuario', {idUsuario: id, usuario: data.usuarios, posteos: data.posteos});
    }
};

module.exports = usersController

