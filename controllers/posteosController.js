const data = require("../db/data")

const posteosController = {
    detalleDelPost: function(req, res, next){
        let id = req.params.id;
        res.render('detallePost', {idPosteo: id, usuario: data.usuarios, posteo: data.posteos});
    },

    agregarPost: function(req, res, next){
        res.render('agregarPost', title = 'Express');
    }
}

module.exports = posteosController