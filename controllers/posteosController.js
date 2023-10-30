const data = require("../db/data");
const db = require("../database/models");
const Posteo = db.Posteo;
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
        res.render('detallePost', {idPosteo: id, usuario: data.usuarios, posteo: data.posteos});
        })

        .catch((error)=> {
        res.render()
        })
    },

    searchResult: function(req,res){ 
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
    agregarPost: function(req, res){
        return res.render('agregarPost');
    }
    },
    crearPost: function(req, res){
        db.Posteo.create ({
            usuario_id: req.session.usuarioLogueado.id,
            imagen: req.body.imagen,
            nombre_producto: req.body.nombreProducto,
            descripcion_producto: req.body.descripcion,
            fecha_carga: req.body.fecha
        })
        .then((data)=> {
            return res.redirect('/')
        })
        .catch((error)=>{
            res.send(error)
        })
        
    },
    crearComentario: function(req,res){
        db.Comentario.create({
            usuario_id: req.session.usuarioLogueado.id,
            post_id: req.params.id,
            comentario: req.body.comentario
        })
        .then((data)=> {
            return res.redirect('/')
        })
        .catch((error)=>{
            res.send(error)
        })
    },
    editarProducto: function (req, res) {
        db.Producto.update({
            imagen: req.body.imagen,
            nombre_producto: req.body.nombreProducto,
            descripcion_producto: req.body.descripcion,
            fecha_carga: req.body.fecha
        }, {where: {id: req.params.id}}
        
        )  
        .then((data)=> {
            return res.redirect('/')
        })
        .catch((error) => {
            res.send(error)
        })
    },
    editarProductoGet: function(req, res){
        let id= req.params.id
        Producto.findByPk(id)

            .then((data)=> {
            //res.send(data)
            return res.render("product-edit", {producto:data}) //le paso otros datos

            }). catch((error)=> {
            res.send(error)
            })
                  
    },
    eliminarProducto: function(req,res) {
        let id= req.params.id
        Producto.destroy({where: {id: id}})
        .then((data) => {
            return res.redirect('/')
        })
        .catch((error)=> {
            res.send(error)
        })
    }

}

module.exports = posteosController