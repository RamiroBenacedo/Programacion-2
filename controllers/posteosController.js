
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
        return res.render('agregarPost')},
        crearPost: function(req, res){
            db.Posteo.create ({
                clienteid: req.session.usuarioLogueado.id,
                campoTextoNombreImg: req.body.imagen,
                campoTextoPiePost: req.body.nombreProducto,
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
                idusuario  : req.session.usuarioLogueado.id,
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
        editarPosteo: function (req, res) {
            db.Posteo.update({
                campoTextoNombreImg: req.body.nombreProducto,
                campoTextoPiePost: req.body.descripcion,
            }, {where: {id: req.params.id}}
            
            )  
            .then((data)=> {
                return res.redirect('/')
            })
            .catch((error) => {
                res.send(error)
            })
        },
        editarPosteoGet: function(req, res){
            let id= req.params.id
            Posteo.findByPk(id)
    
                .then((data)=> {
                //res.send(data)
                return res.render("editarPerfil", {Posteo:data}) //le paso otros datos
    
                }). catch((error)=> {
                res.send(error)
                })
                      
        },
        eliminarPosteo: function(req,res) {
            let id= req.params.id
            Posteo.destroy({where: {id: id}})
            .then((data) => {
                return res.redirect('/')
            })
            .catch((error)=> {
                res.send(error)
            })
        }
    
    }

module.exports = posteosController