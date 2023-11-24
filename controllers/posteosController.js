const db=require("../database/models")
const op = db.Sequelize.Op;

const posteosController = {
    detallePost: function(req, res){
        let id = req.params.id;
        /* relaciones */
        db.Posteo.findByPk(id, {include: [
            {association: 'posteoComentarios', include: [{association: "comentarioUsuario"}]},
            {association: 'posteoUsuarios'}],
            order: [[{model: db.Comentario, as: "posteoComentarios"}, "createdAt", "DESC"]]
        })

        .then((data)=> {
        console.log(id);
        console.log(data);
        //res.send(data)
        return res.render('detallePost', {posteos: data});
        })

        .catch((error)=> {
        res.render()
        })
    },

        crearComentario: function (req, res) {
            if (req.session.user == undefined) {
              return res.redirect('/login')
            } else {
              let comentario = req.body.comentario;
            db.Comentario.create({
              idPost: req.params.id,
              idUsuario: req.session.user.id,
              textoComment: comentario
            })
              .then(function (result) {
                let idPost = req.params.id;
                return res.redirect('/post/detalle/id/'+ idPost);
              })
              .catch(function (error) {
                res.send(error)
              })
            }
          },

        agregarPost: function (req, res) {
            if (res.locals.clienteId != undefined) {
            return res.render('agregarPost');
            } else {
            return res.redirect('/login');
            }
        },

        storeAgregarPost: function (req, res) {
            let info = req.body;
            info.clienteId = req.session.user.id
            db.Post.create(info)
            .then(function (result) {
                return res.redirect('/')
            })
            .catch(function (error) {
                res.send(error)
            })
        },

        deletePost: function (req, res) {
            let id = Number(req.params.id);
            let criterio = {
                where: [{ id: id }]
            }
            db.Post.destroy(criterio)
                .then(function (result) {
                return res.redirect('/')
            })
            .catch(function (error) {
                res.send(error)
                res.redirect('/post/detalle/id/'+ id)
            })
        },

        editPost: function (req, res) {
            let id = Number(req.params.id);
            db.Post.findByPk(id)
                .then(function (result) {
                res.render("editarPost", { post: result })
            })
                .catch(function (error) {
                res.send(error)
            })
        },
        
        updatePost: function (req, res) {
            let id = req.params.id;
            let info = req.body;
            if (info.nombreImg == "") {
                return res.redirect(`/post/editPost/id/${id}`)
            }   else if (info.textoposteo == "") {
                return res.redirect(`/post/editPost/id/${id}`)
            }
            let criterio = {
            where: [{
                id: id
            }]
            }
            db.Post.update(info, criterio)
            .then(function (result) {
                return res.redirect("/post/detalle/id/" + id)
            })
            .catch(function (error) {
                res.send(error)
            })
        },
    };

module.exports = posteosController