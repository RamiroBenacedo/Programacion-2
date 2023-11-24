
const db=require("../database/models")
const Posteo = db.Posteos;
const op = db.Sequelize.Op;
const posteosController = {
    detallePost: function(req, res){
        let id = req.params.id;
        /* relaciones */
        Posteo.findByPk(id, {include: [
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

    resultadoBusqueda: function(req,res){
        let busqueda= req.query.search
            db.Posteo.findAll({
                include: [{association: "posteoUsuarios"}],
                where: {
                    [op.or]: [
                        {nombreImg: {[op.like] : "%" + busqueda+ "%"}},
                        {textonombre:   {[op.like] : "%" + busqueda+ "%"}}]} ,
                order:[[ "createdAt", "DESC"]]
            })
            .then(data => {
                return res.render( "resultadoBusqueda", {posteos:data})

            })

            .catch(error =>  {
                res.send(error)
            })

    },
        crearComentario: function(req,res){
            db.Comentario.create({
                idUsuario  : req.session.user.id,
                idPost: req.params.id,
                campoTextoNombreImg	: req.body.comentario
            })
            .then((data)=> {
                return res.redirect('/')
            })
            .catch((error)=>{
                res.send(error)
            })
        },

        showAgregarPost: function (req, res) {
            if (res.locals.idUsuario != undefined) {
            return res.render('agregarPost');
            } else {
            return res.redirect('/login');
            }
        },

        storeAgregarPost: function (req, res) {
            let info = req.body;
            info.idUsuario = req.session.user.id
            posts.create(info)
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
            posts.destroy(criterio)
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
            posts.findByPk(id)
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
            }   else if (info.textoPost == "") {
                return res.redirect(`/post/editPost/id/${id}`)
            }
            let criterio = {
            where: [{
                id: id
            }]
            }
            posts.update(info, criterio)
            .then(function (result) {
                return res.redirect("/post/detalle/id/" + id)
            })
            .catch(function (error) {
                res.send(error)
            })
        },
    };

module.exports = posteosController