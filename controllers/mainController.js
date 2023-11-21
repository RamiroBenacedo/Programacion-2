const db= require("../database/models")
const bcrypt = require('bcryptjs');


const mainController = {
  index: function (req, res) {
    db.Posteo.findAll({
      include: [
       {association: "posteoUsuarios"},
        
        {association: "posteoComentarios"}
  ],
      order: [['createdAt', 'DESC']]
    })
    .then((data) => {
       res.render('index', {posteos: data})
    })
    .catch((error) =>{
      return res.send({data:error});
    })},

  
  login: function (req, res) {
      return res.render("login")
    },


  loginPost: (req, res) => {
    let emailBuscado = req.body.email;
    let contrasena = req.body.clave;   
    let rememberMe=req.body.rememberMe;      
    
    let errors = {}
    if (emailBuscado == ''){
      errors.message("El email esta vacio")
      res.locals.errors = errors;
      return res.render('login')
    }
    else if (contrasena == "") {
      errors.message = "El campo de contraseña esta vacio";
      res.locals.errors = errors;
      return res.render("login");
    } else {
        let criterio = {
        where: [{email: emailBuscado}]
    };


    db.Usuario.findOne(criterio)
    .then((result) => {
      if (result != null) {
        let check = bcrypt.compareSync(clave, result.clave)
              
      if (check) {
        req.session.user = result.dataValues;
        /* res.send(req.session.usuario) */

        if (rememberMe != undefined) {
        res.cookie('userId', result.id, {maxAge:1000 * 60 * 5}) 
        }
        return res.redirect("/")}
        else {
          errors.message = "La contraseña es incorrecta";
          res.locals.errors = errors;
          return res.render("login")
        }} 
        else {
          errors.message = "No existe el mail " + emailBuscado
          res.render('login')
          }
          
      }).catch((error) => {
          return res.send(error);
      })}},
  

  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("userId")
    return res.redirect("/")
    },

  
  registro: function (req, res) {
    res.render("registro")
  },


  store: function(req, res){
    let info = req.body;
     /*res.send(info)*/
     let errors = {}
    if (info.email == ""){
      errors.message = 'El email esta vacio'
      res.locals.errors = errors;
      res.render('registro')
    } 
    else if (info.clave == ""){
      errors.message = 'La contrasena esta vacia'
      res.locals.errors = errors;
      res.render('registro')
    }
    else if (info.clave.length < 3){
        errors.message = 'La contrasena debe tener mas de 3 caracteres'
        res.locals.errors = errors;
        res.render('registro')
    }
    else if (info.nombre == ""){
        errors.message = 'Debes tener un nombre de usuario'
        res.locals.errors = errors;
        res.render('registro')
    }
    else if (info.nombre.length < 4){
      errors.message = 'Tu nombre debe tener mas de 4 caracteres'
      res.locals.errors = errors;
      res.render('registro')
  }
  else if (info.fecha == ""){
    errors.message = 'Debes poner tu fecha de nacimiento'
    res.locals.errors = errors;
    res.render('registro')
}
else if (info.fotoPerfil == ""){
  errors.message = 'Debes poner la URL de tu foto de perfil'
  res.locals.errors = errors;
  res.render('registro')
}
else if (info.dni == ""){
  errors.message = 'Debes poner tu DNI'
  res.locals.errors = errors;
  res.render('registro')
}
  else{
    let usuario = {
      contrasena: bcrypt.hashSync(info.clave, 10),
      email: info.email,
      nombre: info.nombre,
      foto_de_perfil: info.fotoPerfil,
      fecha_nacimiento: info.fecha,
      dni: info.dni,
      remember_token: "false"
    }
    db.Usuario.create(usuario)
    .then((result) => {
      res.redirect('/login')
   })
    .catch((error)=> {
      errors.message = "Hubo un error";
      res.locals.errors = errors;
      console.log(error)
      return res.redirect("/registro")
    });
  }
  },
        
};

module.exports = mainController;