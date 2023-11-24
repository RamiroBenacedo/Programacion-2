const db= require("../database/models");
let usuarios= db.Usuario;
let posteos= db.Posteo;
const bcrypt = require('bcryptjs');

const usersController = {
    miPerfil: function(req, res) {
        if (res.locals.user !=undefined) {
        let id= req.params.id;
        let criterio = {
            order: [['createdAt', 'DESC']], 
            where: [{ clienteId: id }],
            include: {
              all: true,
              nested: true
            }
          }
        posteos.findAll(criterio)
        .then(function(result){
            return res.render('miPerfil', { clienteId: id, posteos: result});
        })
        .catch(function (error) {
            return res.send(error)
        })} else{
            res.redirect('/login');
        }
    },
    editarPerfil: function (req, res) {
        let id = Number(req.params.id);
        usuarios.findByPk(id)
          .then(function (result) {
            res.render("editarPerfil", { usuarios: result })
          })
          .catch(function (error) {
            res.send(error)
          })
      },
      updatePerfil: function (req, res) {
        let id = req.params.id;
        let info = req.body;
        if (info.nombre == "") {
          return res.redirect(`/users/editarPerfil/id/${id}`)
        } else if (info.email == "") {
          return res.redirect(`/users/editarPerfil/id/${id}`)
        } else if (info.contrasena == "") {
            return res.redirect(`/users/editarPerfil/id/${id}`)
        } else if (info.foto_de_perfil == "") {
            return res.redirect(`/users/editarPerfil/id/${id}`)
        } else if (info.fecha_nacimiento == "") {
            return res.redirect(`/users/editarPerfil/id/${id}`)
        } else if (info.dni == "") {
            return res.redirect(`/users/editarPerfil/id/${id}`)
        }
        let criterio = {
          where: [{
            id: id
          }]
        };
        let actualizacion= {
          nombre: info.nombre,
          email: info.email,
          contrasena: bcrypt.hashSync(info.contrasena, 10),
          foto_de_perfil: info.foto_de_perfil,
          fecha_nacimiento: info.fecha_nacimiento,
          dni: info.dni,
        }
        usuarios.update(actualizacion, criterio)
          .then(function (result) {
            return res.redirect("/users/miPerfil/id/" + id)
          })
          .catch(function (error) {
            res.send(error)
          })
      },
    detalleUsuario: function(req, res) {
        let id= req.params.id
        let relacion = {
            include: {
                all: true,
                nested: true
            }
        };
        usuarios.findByPk(id, relacion)
        .then(function(result){
            return res.render('detalleUsuario', { idUsuario: id, usuario: result, posteos: result.usuarioPosteo });
        })
        .catch(function(error){
            return res.send(error)
        })
    }
};

module.exports = usersController;

