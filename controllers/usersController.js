const db= require("../database/models")
let posteos=db.Posteo;
let usuarios=db.Usuario;
const usersController = {
    miPerfil: function (req, res) {
        if (res.locals.user !=undefined){
            let id=req.params.id;
        }
        let orden={
            order:[['createdAt', 'DESC']],
            where:[{clienteId:id}],
            include:{
                all:true,
                nested:true
            }
        }
        posteos.findAll(orden)
        .then(function(result){
            return res.render('miPerfil', { idUsuario: id, posteos: result});
        })
        .catch(function (error) {
            return res.send(error)
        })
        },


    editarPerfil: function(req, res) {
        res.render('editarPerfil');
    },

    detalleUsuario: function (req, res){
        let id = req.params.id
        let union={
            include:{
                all:true,
                nested:true
            }
        };
        usuarios.findByPk(id, union)
        .then(function(result){
            return res.render('detalleUsuario',{ idUsuario: id, usuario: result, posteo: result.usuarioPosteo });
        })
        .catch(function(error){
            return res.send(error)
        })

    }
};

module.exports = usersController

