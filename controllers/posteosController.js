
const db=require("../database/models")
const Posteo = db.Posteos;
const op = db.Sequelize.Op;
const comentarios=db.comentario;
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
    cartelagregarpost: function(req,res){
        if (res.locals.user !=undefined){
            return res.render('agregarpost');
        }else{
            return res.redirect('/login');}
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
        subirposteo: function(req,res){
            if(res.locals.user !=undefined){
                return res.render("agregrpost");}
                else{return res.redirect('/login');
            }
        },


        eliminarPosteo: function(req,res) {
            let id= Number(req.params.id);
            Posteo.destroy({where: {id: id}})
            .then(function(data)  {
                return res.redirect('/')
            })
            .catch(function(error) {
                res.send(error)
            })
        }
    
    };

module.exports = posteosController