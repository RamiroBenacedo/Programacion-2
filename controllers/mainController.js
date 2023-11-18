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
    let contrasena = req.body.contrasena;   
    let rememberMe=req.body.remenberMe;      
    
    let errores = {}
    if (emailBuscado == ''){
      errores.message("El email esta vacio")
      res.locals.errores = errores;
      return res.render('login')
    }
    else if (contrasena == "") {
      errores.message = "El campo de contraseña esta vacio";
      res.locals.errores = errores;
      return res.render("login");
    } else {
        let criterio = {
        where: [{email: emailBuscado}]
    }};


    db.Usuario.findOne(criterio)
    .then((result) => {
      if (result != null) {
        let check = bcrypt.compareSync(contrasena, result.contrasena)
              
      if (check) {
        req.session.user=result.dataValues;
        if (rememberMe!=undefined) {
        res.cookie('userId', result.id,{maxAge:1000 * 60 * 5})
        }
        return res.redirect("/")}
        else {
          errores.message = "La contraseña es incorrecta";
          res.locals.errores = errores;
          return res.render("login")
        }} 
        else {
          errores.message = "No existe el mail " + emailBuscado
          res.render('login')
          }
          
      }).catch((error) => {
          return res.send(error);
      })},
  

  logout: function (req, res) {
    req.session.destroy()
    res.clearCookie("cookieUsuario")
    return res.redirect("/")
    },

  
  registro: function (req, res) {
    res.render("registro")
  },


  store: function(req, res){
    let info = req.body;
    let errors = {}
    if (info.email = ''){
      errors.message = 'El email esta vacio'
      res.locals.errors = errors;
      res.render('registro')
    } 
    else if (info.contrasena = ''){
      errors.message = 'La contrasena esta vacia'
      res.locals.errors = errors;
      res.render('registro')
    }
    else if (info.contrasena.length < 3){
        errors.message = 'La contrasena debe tener mas de 3 caracteres'
        res.locals.errors = errors;
        res.render('registro')
    }
    else if (info.nombre = ''){
        errors.message = 'Debes tener un nombre de usuario'
        res.locals.errors = errors;
        res.render('registro')
    }
    else if (info.nombre.length < 4){
      errors.message = 'Tu nombre debe tener mas de 4 caracteres'
      res.locals.errors = errors;
      res.render('registro')
  }
  else if (info.fecha_nacimiento = ''){
    errors.message = 'Debes poner tu fecha de nacimiento'
    res.locals.errors = errors;
    res.render('registro')
}
  else{
    let usuario = {
      nombre: info.nombre,
      contrasena: bcrypt.hashSync(info.contrasena, 10),
      email: info.email,
      fecha_nacimiento: info.fecha_nacimiento,
      remember_token: "false"
    }
    db.Usuario.create(usuario)
    .then((data) => {
      res.redirect('/login')
   })
    .catch((error)=> {
      errors.message = "Hubo un error";
      res.locals.errors = errors;
      console.log(error)
      return res.redirect("registracion")
    });
  }
  },
        
};

module.exports = mainController;